export type RecentlyDiscoveredTech = {
  icon: {
    emoji: string;
  };
  properties: {
    'Name': {
      title: { plain_text: string }[];
    };
    'Description': {
      rich_text: { plain_text: string }[];
    };
    'Link': {
      url: string;
    };
    'Tags': {
      multi_select: { name: string; color: string }[];
    };
  };
};
