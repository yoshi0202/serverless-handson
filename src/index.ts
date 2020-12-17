import { ExampleClass } from "./ExampleClass"
const exampleClass = new ExampleClass()
const msg: string = exampleClass.echo("hogehoeg");

exports.handler = async (event:any) => {
  if (!process.env.LINE_TOKEN) {
    console.error(
      `LINE_TOKENが設定されていません LINE_TOKEN=${process.env.LINE_TOKEN}`
    );
    return "";
  }
  switch (event.rawPath) {
    case "/":
      // return await IndexController.main(event.body);
      return "hoge"

    case "/hello":
      // return await HelloController.main(event.body);
      return "hoge"

    default:
      break;
  }
}
