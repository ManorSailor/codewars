function bouncingBall(initialHeight, bounciness, windowHeight) {
    if (initialHeight <= 0 || windowHeight >= initialHeight) return -1;
    if (bounciness <= 0 || bounciness >= 1) return -1;

    // 1 bcz ball will be visible through the window when dropped initially
    let bounceCount = 1;

    // Height of the ball when it first hits the ground
    let bounceHeight = initialHeight * bounciness;

    // The ball should bounce high enough to be visible through the window
    while (bounceHeight > windowHeight) {
        // 2 bcz ball is visible when it rebounds from the ground & then falls back
        bounceCount += 2;

        // Bounce height will decrease each time ball hits the ground
        bounceHeight *= bounciness;
    }

    return bounceCount;
}
  // Bounciness describes how bouncy is the ball, i.e, how high it bounces when it hits the ground
  // In other words, bounciness describes what % of the height a ball will regain after rebounding from the surface