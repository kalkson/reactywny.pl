exports.onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};

exports.shouldUpdateScroll = () => {
  return false;
};
