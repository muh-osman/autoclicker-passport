function thirdPage() {
  // Third page => (تثبيت)
  document.getElementsByTagName("button")[1].click();
  console.log("Third Steep Done");

  setTimeout(() => {
    try {
      // (نعم)
      document.getElementsByTagName("button")[4].click();

      setTimeout(() => {
        // Payment page
        if (document.querySelectorAll("img").length === 4) {
          soundSuccess.play();
          console.log("ALL Done (نعم)");
        } else {
          thirdPage();
          console.log("try again..");
        }
      }, 2000);
    } catch {
      thirdPage();
      console.log("slow internet, try again..");
    }
  }, 1000);
}

thirdPage();