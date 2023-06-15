import DebugContext from "./Foudation/unity_editor_context.mjs";
console.log("Start Js Env");
function InitEnv(context) {
    console.log(context);
    console.log(DebugContext.OnUpdate);
    context.OnUpdate = () => {
        DebugContext.OnUpdate();
    };
}
export default InitEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Uc1Byb2ovbWFpbi5tdHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxZQUFZLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixTQUFTLE9BQU8sQ0FBQyxPQUF3QztJQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMzQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQUEifQ==