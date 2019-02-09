import puts, { putHelloSunshine } from '@shared/puts';
import jpgGreyRoom from '@assets/example-images/grey-room.jpg';

puts('GOODNIGHT, ORSON!');

putHelloSunshine();

console.log(document);

const img = document.getElementById('my-image');

if (img instanceof HTMLImageElement) {
  img.src = jpgGreyRoom;
}
