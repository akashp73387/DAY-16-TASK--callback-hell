var container = document.createElement("div");
container.classList.add("container");
let c = document.getElementById("span");
c.innerHTML = 10;
document.body.append(container);
let count = 10;
setTimeout(() => {
  count = count - 1;
  span.innerHTML = count;
  setTimeout(() => {
    count = count - 1;
    span.innerHTML = count;
    setTimeout(() => {
      count = count - 1;
      span.innerHTML = count;
      setTimeout(() => {
        count = count - 1;
        span.innerHTML = count;
        setTimeout(() => {
          count = count - 1;
          span.innerHTML = count;
          setTimeout(() => {
            count = count - 1;
            span.innerHTML = count;
            setTimeout(() => {
              count = count - 1;
              span.innerHTML = count;
              setTimeout(() => {
                count = count - 1;
                span.innerHTML = count;
                setTimeout(() => {
                  count = count - 1;
                  span.innerHTML = count;
                  setTimeout(() => {
                    count = count - 1;
                    span.innerHTML = "Happy Independence Day";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
