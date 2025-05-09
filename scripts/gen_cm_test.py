#!/usr/bin/env python3
import json
import jsonlines
import os
import argparse
from itertools import cycle

def load_attacks(path):
    with open(path, 'r', encoding='utf-8') as f:
        raw = json.load(f)
    if isinstance(raw, dict):
        if 'attacks' in raw and isinstance(raw['attacks'], list):
            raw_list = raw['attacks']
        elif 'attack_instruction' in raw and isinstance(raw['attack_instruction'], list):
            raw_list = raw['attack_instruction']
        else:
            for v in raw.values():
                if isinstance(v, list):
                    raw_list = v
                    break
            else:
                raise ValueError(f"Cannot find list of attacks in {path}")
    elif isinstance(raw, list):
        raw_list = raw
    else:
        raise ValueError(f"Unexpected format for attacks file: {type(raw)}")

    attacks = []
    for item in raw_list:
        if isinstance(item, str):
            attacks.append({'attack_instruction': item})
        elif isinstance(item, dict) and 'attack_instruction' in item:
            attacks.append(item)
        else:
            attacks.append({'attack_instruction': str(item)})
    return attacks


def main():
    parser = argparse.ArgumentParser(description="Generate C+M samples and HTML pages")
    parser.add_argument('--context_file', type=str, default='test.jsonl',
                        help='Path to test.jsonl containing context, question, ideal')
    parser.add_argument('--attack_file', type=str, default='text_attack_test.json',
                        help='Path to text_attack_test.json containing attack templates')
    parser.add_argument('--count', type=int, default=10,
                        help='Number of samples to generate')
    parser.add_argument('--output_json', type=str, default='samples_for_test.json',
                        help='Output JSON file for C+M samples')
    parser.add_argument('--output_html_dir', type=str, default='html_test',
                        help='Directory to output HTML files')
    args = parser.parse_args()

    # Load contexts
    contexts = []
    with jsonlines.open(args.context_file) as reader:
        for obj in reader:
            contexts.append(obj)
    contexts = contexts[:args.count]

    # Load and normalize attacks
    attacks = load_attacks(args.attack_file)

    # Prepare output folders
    os.makedirs(args.output_html_dir, exist_ok=True)
    samples = []

    # Combine contexts with attack instructions, cycle attacks if fewer than count
    attack_iter = cycle(attacks)
    for idx, ctx in enumerate(contexts):
        if idx >= args.count:
            break
        sid = f"sample_{idx}"
        atk = next(attack_iter)
        rec = {
            'id': sid,
            'context': ctx.get('context', ''),
            'attack_instruction': atk.get('attack_instruction', '')
        }
        samples.append(rec)

        # Generate HTML containing only context and attack instruction
        html = f"""<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <title>{sid}</title>
</head>
<body>
  <div class=\"context\">{ctx.get('context','').replace('\n','<br>')}</div>
  <div class=\"attack-instruction\">{atk.get('attack_instruction','')}</div>
</body>
</html>"""
        html_path = os.path.join(args.output_html_dir, f"{sid}.html")
        with open(html_path, 'w', encoding='utf-8') as hf:
            hf.write(html)

    # Save combined samples to JSON
    with open(args.output_json, 'w', encoding='utf-8') as jf:
        json.dump(samples, jf, ensure_ascii=False, indent=2)

    print(f"Generated {len(samples)} samples and HTML pages in '{args.output_html_dir}'")

if __name__ == '__main__':
    main()