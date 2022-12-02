import Notes from './Notes';
import Link from 'next/link';

export default function Chapters({ params: { bibleId, bookId, chapterId} }) {
				return (
								<div>
												<h1>{bookId} - Chapter '{chapterId}' - Notes</h1>
												<Notes />
												<Link href={`/bibles/${bibleId}/books/${bookId}`}>← Back</Link>
								</div>
				);
}
