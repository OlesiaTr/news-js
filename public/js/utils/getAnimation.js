const getAnimation = (car, distance, time) => {
  const animation = {};
  const startTime = new Date().getTime();

  async function animationInterval() {
    const presentTime = new Date().getTime();

    const passedDistance = Math.round(
      (presentTime - startTime) * (distance / time),
    );

    // eslint-disable-next-line no-param-reassign
    car.style.transform = `translateX(${Math.min(passedDistance, distance)}px)`;
    if (passedDistance < distance) {
      animation.id = window.requestAnimationFrame(animationInterval);
    }
  }

  animation.id = window.requestAnimationFrame(animationInterval);
  return animation;
};

export default getAnimation;
