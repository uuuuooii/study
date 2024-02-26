interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: string;
}

export const GA_TRACKING_ID = 'G-V7EEJ7FY6J';

// eslint-disable-next-line object-curly-newline
export const event = ({ action, category, label, value }: EventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
