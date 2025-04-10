'use client';
import { Button } from '@/shared/ui/button';
import styles from './NewsTags.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface NewsTagsProps {
  tags: string[];
}

const NewsTags = ({ tags }: NewsTagsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filteredTags = Array.from(new Set(tags));
  const currentTag = searchParams.get('tag');

  const handleTagClick = (tag?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentTag === tag) {
      params.delete('tag');
    } else {
      if (tag) {
        params.set('tag', tag);
      } else {
        params.delete('tag');
      }
    }
    router.push(`/news?${params.toString()}`);
  };

  return (
    <div className={styles.tags}>
      <Button
        onClick={() => handleTagClick()}
        className={clsx(styles.tag, { [styles.active]: !currentTag })}
      >
        Все новости
      </Button>
      {filteredTags.map((tag) => (
        <Button
          className={clsx(styles.tag, { [styles.active]: currentTag === tag })}
          key={tag}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default NewsTags;
