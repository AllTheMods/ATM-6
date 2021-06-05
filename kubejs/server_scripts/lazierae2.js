/**
 * Changes the LazierAE2 recipes so they're using the unified
 * Silicon instead of the untagged AE2 Silicon.
 * Author: Relentless
*/
events.listen('recipes', e => {

    function removeEtcherRecipe(output) {
        e.remove({output: output, type: 'lazierae2:circuit_etcher'})
    }

    function addEtcherRecipe(output, input1, input2, input3) {
        e.custom({
            type: 'lazierae2:circuit_etcher',
            processing_time: 120,
            output: {
                item: output
            },
            inputs: [
                createInputField(input1),
                createInputField(input2),
                createInputField(input3)
            ]
        })
    }

    function removeAggregatorRecipe(output) {
        e.remove({output: output, type: 'lazierae2:fluix_aggregator'})
    }

    function addAggregatorRecipe(output, input1, input2, input3) {
        e.custom({
            type: 'lazierae2:fluix_aggregator',
            processing_time: 80,
            output: {
                item: output
            },
            inputs: [
                createInputField(input1),
                createInputField(input2),
                createInputField(input3)
            ]
        })
    }

    function createInputField(input) {
        if (input.startsWith("forge:")) {
            return {
                "input": {
                    "tag": input
                }
            }
        } else {
            return {
                "input": {
                    "item": input
                }
            }
        }
    }

    removeEtcherRecipe('lazierae2:speculative_processor')
    addEtcherRecipe('lazierae2:speculative_processor', 'lazierae2:spec_core_64', 'forge:dusts/redstone', 'forge:silicon')
    removeEtcherRecipe('lazierae2:parallel_processor')
    addEtcherRecipe('lazierae2:parallel_processor', 'forge:gems/resonating', 'forge:dusts/redstone', 'forge:silicon')
    removeEtcherRecipe('appliedenergistics2:calculation_processor')
    addEtcherRecipe('appliedenergistics2:calculation_processor', 'appliedenergistics2:purified_certus_quartz_crystal', 'forge:dusts/redstone', 'forge:silicon')
    removeEtcherRecipe('appliedenergistics2:logic_processor')
    addEtcherRecipe('appliedenergistics2:logic_processor', 'forge:ingots/gold', 'forge:dusts/redstone', 'forge:silicon')
    removeEtcherRecipe('appliedenergistics2:engineering_processor')
    addEtcherRecipe('appliedenergistics2:engineering_processor', 'forge:gems/diamond', 'forge:dusts/redstone', 'forge:silicon')

    removeAggregatorRecipe('lazierae2:carb_fluix_dust')
    addAggregatorRecipe('lazierae2:carb_fluix_dust', 'forge:dusts/coal', 'appliedenergistics2:fluix_dust', 'forge:silicon')
})
