export const STAGGER = ( props ) => {
	new TimelineMax()
	.staggerTo( props.elements, props.duration, {
		y: props.y || 0,
		x: props.x || 0,
		opacity: props.opacity || 1,
		ease: props.ease
	}, props.delay )
	.eventCallback("onComplete", props.onComplete, null);
};