export const getAnimation = (car, distance, time) => {
  const animation = {};
  const startTime = new Date().getTime();

  async function animationInterval() {
    const presentTime = new Date().getTime();
    const passedDistance = Math.round(
      (presentTime - startTime) * (distance / time)
    );

    console.log(passedDistance);
    console.log(distance);

    car.style.transform = `translateX(${Math.min(passedDistance, distance)}px)`;
    console.log(Math.min(passedDistance, distance));
    if (passedDistance < distance) {
      animation.id = window.requestAnimationFrame(animationInterval);
    }
  }

  animation.id = window.requestAnimationFrame(animationInterval);
  return animation;
};
