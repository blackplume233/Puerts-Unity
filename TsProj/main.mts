import { require } from "puerts";
import GameGlobal from "./Foudation/unity_editor_context.mjs";
console.log("Start Js Env");
                                                                                             
function InitEnv(context: CS.Typescript.Runtime.JsContext) {
    console.log(context)
    GameGlobal.InitGlobalContext(context)
}
export default InitEnv
