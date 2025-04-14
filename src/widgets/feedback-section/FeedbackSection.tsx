import { getSetting } from '@/shared/api/getSetting';
import { FeedbackForm } from '../feedback-form';

export default async function FeedbackSection({
  title,
  description,
  type = 'feedback',
}: {
  title: string;
  description: string;
  type?: 'delivery' | 'feedback';
}) {
  const setting = await getSetting();

  return (
    <FeedbackForm title="Заголовок" description="Описание" setting={setting} />
  );
}
