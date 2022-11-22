import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { renderGalleryKeyboardEventScript } from '../../functions/galleryEvent';
import {
	Content,
	DotsContainer,
	ImageItem,
	ImageItemContainer,
	ImageScrollableContainer,
	PopupArrayNext,
	PopupArrayPrevious,
	PopupCloseButton,
	PopupContent,
	PopupImage,
	PopupImageContainer,
	Source,
	ThumbnailButton,
	ThumbnailsContainer,
	ThumbnailsMainContainer,
} from './styles';

interface IImageProps {
	title?: string;
	url: string;
}
interface IGalleryProps {
	images: Array<IImageProps>;
}

export default function ProjectGallery({ images }: IGalleryProps) {
	const thumbnailsContainer = useRef<HTMLDivElement>(null);

	const [activeImagePopup, setActiveImagePopup] = useState<IImageProps | null>(null);

	const hasNextImage = !!images[images.findIndex((img) => img.url === activeImagePopup?.url) - 1];
	const hasPreviousImage = !!images[images.findIndex((img) => img.url === activeImagePopup?.url) + 1];

	const handleNext = useCallback(
		(event?: React.MouseEvent, url?: string) => {
			event?.stopPropagation();

			const selectedIndex = images.findIndex((img) => img.url === url);

			const next = images[selectedIndex + 1];

			if (next) setActiveImagePopup(next);
		},
		[images],
	);

	const handlePrevious = useCallback(
		(event?: React.MouseEvent, url?: string) => {
			event?.stopPropagation();

			const selectedIndex = images.findIndex((img) => img.url === url);

			const previous = images[selectedIndex - 1];

			if (previous) setActiveImagePopup(previous);
		},
		[images],
	);

	function transformImgurToThumbnail(url: string): string {
		if (!url.includes('imgur')) return url;

		const imgurID = url.replace(/https:\/\/?i?.imgur.com\/(\S+)\.png/g, '$1');

		return `https://i.imgur.com/${imgurID}h.png`;
	}

	function handleThumbnailClick(event: KeyboardEvent, image: IImageProps): void {
		event.stopPropagation();

		if (event.key === 'Enter') {
			setActiveImagePopup(image);
		}
	}

	function closePopup(): void {
		setActiveImagePopup(null);
	}

	useEffect(() => {
		const activeThumbElement = document.querySelector(`.thumbnail-activated`);

		if (activeThumbElement) {
			activeThumbElement?.scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
			});
		}
	}, [activeImagePopup]);

	useEffect(() => {
		window.addEventListener('next-gallery-image', () => {
			handleNext(undefined, activeImagePopup?.url);
		});
		window.addEventListener('previous-gallery-image', () => {
			handlePrevious(undefined, activeImagePopup?.url);
		});
		window.addEventListener('close-popup', () => {
			closePopup();
		});
	}, [handleNext, handlePrevious, activeImagePopup]);

	return (
		<>
			{renderGalleryKeyboardEventScript()}

			<Content>
				{images.map((image, index) => (
					<ImageItem key={`${image}-${index}`}>
						<ImageItemContainer
							onClick={() => setActiveImagePopup(image)}
							onKeyUp={(e) => handleThumbnailClick(e, image)}
						>
							<Source src={transformImgurToThumbnail(image.url)} alt="johncovv project" fill />
						</ImageItemContainer>
					</ImageItem>
				))}
			</Content>

			<PopupContent active={!!activeImagePopup} onClick={closePopup}>
				<PopupCloseButton onClick={closePopup} />

				<PopupImageContainer>
					<ImageScrollableContainer>
						{activeImagePopup?.url && (
							<PopupImage
								src={activeImagePopup?.url}
								alt="johncovv project"
								onClick={(e) => e.stopPropagation()}
								fill
							/>
						)}
					</ImageScrollableContainer>
				</PopupImageContainer>

				<DotsContainer onClick={(e) => e.stopPropagation()}>
					{images.map((image, index) => (
						<span
							key={`dot-${index}`}
							className={activeImagePopup?.url === image.url ? 'activated' : undefined}
							onClick={() => setActiveImagePopup(image)}
						/>
					))}
				</DotsContainer>
				<ThumbnailsMainContainer>
					<PopupArrayPrevious $active={hasNextImage} onClick={(e) => handlePrevious(e, activeImagePopup?.url)} />

					<PopupArrayNext $active={hasPreviousImage} onClick={(e) => handleNext(e, activeImagePopup?.url)} />
					<ThumbnailsContainer ref={thumbnailsContainer} onClick={(e) => e.stopPropagation()}>
						{images.map((image, index) => (
							<ThumbnailButton
								id={`thumbnail-${index}`}
								className={activeImagePopup?.url === image.url ? 'thumbnail-activated' : undefined}
								key={`thumbnail-${index}`}
								backgroundUrl={image.url}
								isActivated={activeImagePopup?.url === image.url}
								onClick={() => setActiveImagePopup(image)}
							/>
						))}
					</ThumbnailsContainer>
				</ThumbnailsMainContainer>
			</PopupContent>
		</>
	);
}
