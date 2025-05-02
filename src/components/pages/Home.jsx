import React from 'react';
import Box from '@mui/material/Box';
import Hero from './Hero';
import Typography from '@mui/material/Typography';
import Navigator from '../Navigator'

const Home = () => (
  <>
  <Navigator />
  <Box
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      width: '100%',
      m: 0,
      p: 0,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Hero />

    <Box
      component="main"
      id="main"
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 3, sm: 5, md: 8 },
        maxWidth: 1200,
        mx: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {/* 第一部分 */}
      <Box sx={{ width: '100%', mb: { xs: 4, sm: 6, md: 8 } }}>
        {/* 标题 */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            mb: { xs: 2, sm: 3, md: 4 },
            lineHeight: 1.2,
            color: 'inherit',
          }}
        >
          Origin of EDC
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            lineHeight: 1.6,
            mb: { xs: 3, sm: 4, md: 6 },
            color: 'inherit',
          }}
        >
          <strong>What's in a guy's bag?</strong>
          <br /> If you're just thinking about basic functionality, honestly, it's a no-brainer. It's pure survival instinct — no drama, no fuss.
          <br />But if you're looking to add a little color (and personality) to your rugged, no-nonsense lifestyle... well, now we're talking.
          <br />Because that's where a trend called "Every Day Carry" — or EDC for short — comes into play.
          <br /><br />
          At its core, EDC means the essential gear you carry every day for life, work, and everything in between.
          <br />Fun fact: the concept of EDC actually traces back to the 1960s during the Cold War.
          <br />Back then, some Americans, convinced that World War III was just around the corner, started prepping like there was no tomorrow.
          <br />These "survivalists" believed they could survive doomsday with nothing but their own skills and whatever gear they could carry.
          <br />And thus, the spirit of EDC — Every. Day. Carry. — was born.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
            lineHeight: 1.6,
            mt: { xs: 2, sm: 3 },
            color: 'inherit',
          }}
        >
          For a comprehensive overview of EDC, see <a href="https://en.wikipedia.org/wiki/Everyday_carry" target="_blank" rel="noopener noreferrer">Everyday Carry (Wikipedia)</a>.
        </Typography>
      </Box>

      {/* 第二部分 */}
      <Box sx={{ width: '100%' }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            mb: { xs: 2, sm: 3, md: 4 },
            lineHeight: 1.2,
            color: 'inherit',
          }}
        >
          Evolution of EDC
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            lineHeight: 1.6,
            color: 'inherit',
          }}
        >
          <strong>Back in the day, there were basically two types of people into EDC:</strong>
          <br />the hardcore professionals, and the wild-at-heart outdoor survivalists.
          <br />But once humanity entered an era of peace (thank goodness), EDC evolved.
          <br />It broke free from the world of survival fanatics and blossomed into a whole new form of culture and art — something people could truly enjoy, collect, and obsess over.
          <br /><br />
          Today, EDC is a hobby, a style, and a personal statement all rolled into one.
          <br />It's the ultimate way for any high-quality modern man to express his attitude toward life and show off a bit of his unique personality.
          <br />The items you carry every day tell a story — about your life, your experiences, your mindset.
          <br />They hold your memories.
          And as you fine-tune and upgrade your EDC gear over time, you’re really recording your journey and growth as a person.
          <br /><br />
          Of course, there’s no "one-size-fits-all" checklist for EDC — after all, <strong>your EDC should be made just for you.</strong>
          <br />But that said, there are certain categories of gear that almost every EDC enthusiast gravitates toward.
          <br />And when choosing your pieces, the golden rule stays true to EDC’s original spirit:
          <strong> carry what you truly need for life and work.</strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
            lineHeight: 1.6,
            mt: { xs: 2, sm: 3 },
            color: 'inherit',
          }}
        >
          Read more on the cultural evolution of EDC at <a href="https://meta-edc.com/collections/fidget-toy" target="_blank" rel="noopener noreferrer">MetaEDC</a> and  <a href="https://geeone.com/?srsltid=AfmBOor3bZDD9j1W2NUhaZwytwM9kyCt35eiYqEEvIWFx3nvLAvAIluk" target="_blank" rel="noopener noreferrer">GEEONE</a>.
        </Typography>
      </Box>
    </Box>
  </Box>
  </>
);

export default Home;
