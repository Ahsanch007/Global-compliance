import { Carousel } from '@mantine/carousel';
import { UpcomingEventCard } from '../Cards/UpcomingEventCard';
import { theme } from '@/theme/theme';

export function EventCarousel() {
  return (
    <Carousel
      withIndicators
      height="auto"
      // slideSize="100%"
      loop
      align="center"
      dragFree
      breakpoints={[
        { maxWidth: 'md', slideSize: '100%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
          backgroundColor: theme.colors.golden,
          color: 'white',
          padding: '20px',
          '@media (max-width: 1024px)': {
            // Adjust the breakpoint as needed
            display: 'none', // Hide the control element on mobile screens
          },
        },

        indicator: {
          width: '56px', // Adjust the width of the indicators
          height: '12px', // Adjust the height of the indicators
          margin: '2px', // Adjust the margin between indicators
          backgroundColor: theme.colors.brand, // Indicator color
          transition: 'background-color 0.3s', // Smooth transition on hover
          '&[data-active]': {
            backgroundColor: theme.colors.golden, // Active indicator color
          },
        },
      }}
    >
      <Carousel.Slide>
        <div>
          <UpcomingEventCard />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        {' '}
        <div>
          <UpcomingEventCard />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        {' '}
        <div>
          <UpcomingEventCard />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
