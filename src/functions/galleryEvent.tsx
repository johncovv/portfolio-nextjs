function galleryEvent(): void {
	window.addEventListener('keyup', (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				window.dispatchEvent(new CustomEvent('close-popup'));
				break;
			case 'ArrowRight':
				window.dispatchEvent(new CustomEvent('next-gallery-image'));
				break;
			case 'ArrowLeft':
				window.dispatchEvent(new CustomEvent('previous-gallery-image'));
				break;
		}
	});
}

export function renderGalleryKeyboardEventScript(): JSX.Element {
	return (
		<script
			id="gallery-navigation-script"
			dangerouslySetInnerHTML={{
				__html: `
					${galleryEvent}
					galleryEvent();
				`,
			}}
		/>
	);
}
