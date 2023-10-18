import { Card } from 'react-bootstrap';

const EmbedVideo = ({ src }: { src: string }) => (
    <Card>
        <Card.Body>
            {/* 21:9 aspect ratio */}
            <div className="ratio ratio-21x9">
                <iframe src={src} title="iframe"></iframe>
            </div>
        </Card.Body>
    </Card>
);

export default EmbedVideo;
