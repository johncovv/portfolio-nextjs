import Script from 'next/script';

function galleryEvent(): void {
	document.addEventListener('keyup', (e: KeyboardEvent) => {
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
		<Script
			id="gallery-navigation-script"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
					const galleryEvent = ${galleryEvent.toString()}
					galleryEvent();
				`,
			}}
		/>
	);
}
