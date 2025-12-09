export interface ChangelogItemProps {
  version: string;
  date: string;
  type: 'new' | 'improvement' | 'fix';
  changes: string[];
  icon?: string;
}
