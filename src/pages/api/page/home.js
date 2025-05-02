// pages/api/page/home.js

export default function handler(req, res) {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  
    res.status(200).json({
      slug: 'home',
      title: 'Origin of EDC',
      hero: {
        heading: 'Welcome to Fidget World - EDC',
        subheading: 'EDC is a popular trend that emerged in China, also known as "Every Day Carry" culture, however, as this culture developed, it gained a more distinct focus in China...',
        backgroundImageUrl: '/assets/images/edcimgHomeintro2_extended.jpg'
      },
      sections: [
        {
          heading: 'Origin of EDC',
          body: [
            "What's in a guy's bag?",
            "If you're just thinking about basic functionality, honestly, it's a no-brainer. It's pure survival instinct — no drama, no fuss.",
            "But if you're looking to add a little color (and personality) to your rugged, no-nonsense lifestyle... well, now we're talking.",
            "Because that's where a trend called \"Every Day Carry\" — or EDC for short — comes into play.",
            "At its core, EDC means the essential gear you carry every day for life, work, and everything in between.",
            "Fun fact: the concept of EDC actually traces back to the 1960s during the Cold War.",
            "Back then, some Americans, convinced that World War III was just around the corner, started prepping like there was no tomorrow.",
            "These \"survivalists\" believed they could survive doomsday with nothing but their own skills and whatever gear they could carry.",
            "And thus, the spirit of EDC — Every. Day. Carry. — was born."
          ],
          links: [
            {
              text: 'Everyday Carry (Wikipedia)',
              url: 'https://en.wikipedia.org/wiki/Everyday_carry'
            }
          ]
        },
        {
          heading: 'Evolution of EDC',
          body: [
            "Back in the day, there were basically two types of people into EDC: the hardcore professionals, and the wild-at-heart outdoor survivalists.",
            "But once humanity entered an era of peace (thank goodness), EDC evolved.",
            "It broke free from the world of survival fanatics and blossomed into a whole new form of culture and art — something people could truly enjoy, collect, and obsess over.",
            "Today, EDC is a hobby, a style, and a personal statement all rolled into one.",
            "It's the ultimate way for any high-quality modern man to express his attitude toward life and show off a bit of his unique personality.",
            "The items you carry every day tell a story — about your life, your experiences, your mindset.",
            "They hold your memories.",
            "And as you fine-tune and upgrade your EDC gear over time, you’re really recording your journey and growth as a person.",
            "Of course, there’s no \"one-size-fits-all\" checklist for EDC — after all, your EDC should be made just for you.",
            "But that said, there are certain categories of gear that almost every EDC enthusiast gravitates toward.",
            "And when choosing your pieces, the golden rule stays true to EDC’s original spirit: carry what you truly need for life and work."
          ],
          links: [
            {
              text: 'MetaEDC',
              url: 'https://meta-edc.com/collections/fidget-toy'
            },
            {
              text: 'GEEONE',
              url: 'https://geeone.com/?srsltid=AfmBOor3bZDD9j1W2NUhaZwytwM9kyCt35eiYqEEvIWFx3nvLAvAIluk'
            }
          ]
        }
      ]
    });
  }
  