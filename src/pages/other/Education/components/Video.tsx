import ReactPlayer from 'react-player';

const Video = ({ src }: { src: string }) => <ReactPlayer url={src} width="100%" />;

export default Video;
