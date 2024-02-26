interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: string;
}

export const GA_TRACKING_ID = 'G-V7EEJ7FY6J'; // 측정ID 설정: .env 파일로 관리해도된다.

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// eslint-disable-next-line object-curly-newline
export const event = ({ action, category, label, value }: EventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
