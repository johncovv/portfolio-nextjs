import { useCallback, useEffect, useRef, useState } from 'react';

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

	useEffect(() => {
		const activeThumbElement = document.querySelector(`.thumbnail-activated`);

		if (activeThumbElement) {
			activeThumbElement?.scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
			});
		}
	}, [activeImagePopup]);

	const closePopup = (): void => setActiveImagePopup(null);

	const handleNext = useCallback(
		(event: React.MouseEvent, url?: string) => {
			event.stopPropagation();

			const selectedIndex = images.findIndex((img) => img.url === url);

			const next = images[selectedIndex + 1];

			if (next) setActiveImagePopup(next);
		},
		[images]
	);

	const handlePrevious = useCallback(
		(event: React.MouseEvent, url?: string) => {
			event.stopPropagation();

			const selectedIndex = images.findIndex((img) => img.url === url);

			const previous = images[selectedIndex - 1];

			if (previous) setActiveImagePopup(previous);
		},
		[images]
	);

	return (
		<>
			<Content>
				{images.map((image, index) => (
					<ImageItem key={`${image}-${index}`}>
						<ImageItemContainer onClick={() => setActiveImagePopup(image)}>
							<Source src={image.url} alt="johncovv project" />
						</ImageItemContainer>
					</ImageItem>
				))}
			</Content>

			<PopupContent active={!!activeImagePopup} onClick={closePopup}>
				<PopupCloseButton onClick={closePopup} />

				<PopupImageContainer>
					<ImageScrollableContainer>
						<PopupImage src={activeImagePopup?.url} alt="johncovv project" onClick={(e) => e.stopPropagation()} />
					</ImageScrollableContainer>
				</PopupImageContainer>

				<DotsContainer onClick={(e) => e.stopPropagation()}>
					{images.map((image, index) => (
						/* eslint-disable jsx-a11y/click-events-have-key-events */
						/* eslint-disable jsx-a11y/no-static-element-interactions */
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
