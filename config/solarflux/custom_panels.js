/*
* This JavaScript file can be used to initialize your own solar panels.
* First off, all methods have return types (they are specified after the "=>")
* How-to: (or watch the tutorial https://youtu.be/WVr6-3E7lA8 ;3)
* 1. To create a new panel, you need to make a builder, call panel()=>SolarPanelBuilder to begin the builder chain.
* 2. Chain elements:
*    - .name("yourname")=>SolarPanelBuilder // mandatory
*    - .height(float)=>SolarPanelBuilder // optional, float value is between [0;1]
*    - .generation("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .capacity("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .transfer("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
* 3. At the end of the chain, call .build()=>SolarPanel (alternatively, .buildAndRegister()=>SolarPanel, to skip step #5)
* 4. Languages: call after build chain end (operate on panel), start language chain with .langBuilder()=>LanguageBuilder
*    - .put("en_us", "Your Solar Panel Name")=>LanguageBuilder
*    After that, call as many lang assigns as you want:
*    - .put("lang", "Your Solar Panel Name")=>LanguageBuilder
*    End chain with .build()=>SolarPanel
* 5. Recipes: call after build chain end (operate on panel), start recipe chain with .recipeBuilder()=>RecipeBuilder
*    - .shape(string...)=>RecipeBuilder // Specify the needed string amount (1 string = 1 row)
*    After you specified the recipe shape, bind all ingredients:
*    - .bind('c', item("modid", "item_name"))=>RecipeBuilder
*    End chain with .build(AMOUNT)=>SolarPanel // AMOUNT is the int value (0;64] of items in the recipe output, if omitted, will be defaulted to 1.
* 6. To register the panel, append .register()=>SolarPanel after ending the chain.
* 7. Texturing: (all textures are stored in "textures" folder)
*      "yourname_base.png", optionally with "yourname_base.mcmeta" (for animations)
*      "yourname_top.png", optionally with "yourname_top.mcmeta" (for animations)
* 
* Additional methods & features:
*   - isModLoaded("modid")=>boolean // returns if the specified mod is loaded. Could be useful for setting up mod-dependent solar panels.
*   - you can have a line "import path.to.Class;"  to avoid using Java.type("path.to.Class") stuff. Created outside of any functions, declares a new variable with the simple class name.
*   - you can have a line "define a_key !value!" to make the compiler replace all a_key with !value! at runtime.
*/

/** This function is called when mod is being constructed */
function init() {
	panel()
		.name("allthemodium")
		.height(8 / 16.0)
		.generation("" + (512 * 4))
		.capacity("" + (8000000 * 4))
		.transfer("" + (512 * 4 * 8))
	.buildAndRegister()
		.langBuilder()
			.put("en_us", "Allthemodium Solar Panel")
			.put("zh_cn", "ATM太阳能板")
			.build();

	panel()
		.name("vibranium")
		.height(8 / 16.0)
		.generation("" + (512 * 4 * 4))
		.capacity("" + (8000000 * 4 * 2))
		.transfer("" + (512 * 4 * 8 * 4))
	.buildAndRegister()
		.langBuilder()
			.put("en_us", "Vibranium Solar Panel")
			.put("zh_cn", "振金太阳能板")
			.build();

	panel()
		.name("unobtainium")
		.height(8 / 16.0)
		.generation("" + (512 * 4 * 4 * 4))
		.capacity("" + (8000000 * 4 * 2 * 2))
		.transfer("" + (512 * 4 * 8 * 4 * 4))
	.buildAndRegister()
		.langBuilder()
			.put("en_us", "Unobtainium Solar Panel")
			.put("zh_cn", "难得素太阳能板")
			.build();
}