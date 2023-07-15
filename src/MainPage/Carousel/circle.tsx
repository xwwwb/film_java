import { CircleProps } from './type';

export default function circle(props: CircleProps) {
  const { fill, index } = props;
  if (fill) {
    return (
      <div
        data-index={index}
        style={{
          width: '8px',
          height: '8px',
          border: '2px solid #1F2937',
          borderRadius: '50%',
          opacity: '0.8',
          backgroundColor: '#1F2937',
          margin: '0 5px',
          cursor: 'pointer'
        }}></div>
    );
  } else {
    return (
      <div
        data-index={index}
        style={{
          width: '8px',
          height: '8px',
          border: '2px solid #9CA3AF',
          borderRadius: '50%',
          backgroundColor: '#9CA3AF',
          opacity: '0.5',
          margin: '0 5px',
          cursor: 'pointer'
        }}></div>
    );
  }
}
