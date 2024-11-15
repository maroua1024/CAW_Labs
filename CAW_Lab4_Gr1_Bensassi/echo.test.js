const exf = require('./echo');

describe("exf function", () => {
  test("should print the string 'echo' five times", () => {
    console.log = jest.fn(); 
    exf("echo", 5);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenCalledWith("echo");
  });

  test("should print 'JS from server' ten times", () => {
    console.log = jest.fn();
    exf("JS from server", 10);
    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenCalledWith("JS from server");
  });
});
