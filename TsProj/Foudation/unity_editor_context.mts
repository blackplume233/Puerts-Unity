namespace GameGlobal{
    export class GameContext{
        cs_context: CS.Typescript.Runtime.JsContext | null
        constructor() {
            this.cs_context = null
        }

        Init(cs_context: CS.Typescript.Runtime.JsContext) {
            this.cs_context = cs_context
            this.cs_context.OnUpdate = this.OnUpdate
            this.cs_context.OnDispose = this.OnDispose
        }

        OnUpdate() {
        
        }

        OnDispose() {
            
        }
       
    }

    export function InitGlobalContext(cs_context: CS.Typescript.Runtime.JsContext) {
        instance = new GameContext();
        instance.Init(cs_context)
    }

    export function GetGameContext(): GameContext{
        return instance
    }

    var instance:GameContext;
}
export default GameGlobal;