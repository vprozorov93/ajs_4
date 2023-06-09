export default function healthStatus(object) {
  if (object.health > 50) {
    return 'healthy';
  }
  if (object.health <= 50 && object.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
