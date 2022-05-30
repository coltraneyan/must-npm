function must(arg) {
  let c = "untested arg";
  if (arg) {
    c = "good arg!";
    console.log(c);
  } else {
    throw Error("bad arg!");
  }
}

export default must;
