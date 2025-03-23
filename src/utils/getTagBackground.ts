export default function getTagBackground(color: string) {
  switch (color) {
    case 'brown':
      return 'bg-amber-800';
    case 'orange':
      return 'bg-orange-800';
    case 'yellow':
      return 'bg-yellow-800';
    case 'green':
      return 'bg-green-800';
    case 'blue':
      return 'bg-blue-800';
    case 'purple':
      return 'bg-purple-800';
    case 'pink':
      return 'bg-pink-400';
    case 'red':
      return 'bg-red-700';
    default:
      return 'bg-gray-600';
  }
}
