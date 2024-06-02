import { Carousel } from '@mantine/carousel';
// import { UpcomingEventCard } from '../Cards/UpcomingEventCard';
import { theme } from '@/theme/theme';
import { PurchaseCard } from '../Cards/dashboard cards/PurchaseCard';

export function PurchaseCarousel() {
  return (
    <Carousel
      withIndicators
      height="auto"
      slideSize="40%"
      loop
      align="start"
      slideGap="md"
      sx={{
        maxWidth: '1200px',
      }}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
          backgroundColor: 'transparent',
          boxShadow: '0px 17px 46px -17px #0000001A',
          border: '1px solid #1D2B391A',
          color: 'black',
          padding: '20px',
          '@media (max-width: 1024px)': {
            display: 'none', // Hide the control element on mobile screens
          },
        },
        indicator: {
          width: '56px',
          height: '12px',
          margin: '2px',

          backgroundColor: theme.colors.brand,
          transition: 'background-color 0.3s',
          '&[data-active]': {
            backgroundColor: theme.colors.golden,
          },
        },
      }}
    >
      <Carousel.Slide>
        <div>
          <PurchaseCard />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div>
          <PurchaseCard />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div>
          <PurchaseCard />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
