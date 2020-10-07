events.listen('recipes', function (e) {
  //Combs to Dye
  var cuShaped = e.recipes.cucumber.shaped_no_mirror

  function dyeShaped(result, pattern) {
    cuShaped({
      'pattern': pattern,
      'key': {
        'C': {
          'item': 'resourcefulbees:rgbee_honeycomb'
        }
      },
      'result': {
        'item': result,
        'count': 6
      }
    })
    cuShaped({
      'pattern': pattern,
      'key': {
        'C': {
          'item': 'resourcefulbees:rgbee_honeycomb_block'
        }
      },
      'result': {
        'item': result,
        'count': 54
      }
    })
  }
  dyeShaped('minecraft:red_dye', [
    '  C',
    ' C ',
    ' C '
  ])
  dyeShaped('minecraft:green_dye', [
    '  C',
    'CC ',
    '   '
  ])
  dyeShaped('minecraft:purple_dye', [
    '  C',
    '  C',
    ' C '
  ])
  dyeShaped('minecraft:cyan_dye', [
    'C C',
    ' C ',
    '   '
  ])
  dyeShaped('minecraft:light_gray_dye', [
    ' C ',
    ' C ',
    '  C'
  ])
  dyeShaped('minecraft:gray_dye', [
    '  C',
    ' C ',
    'C  '
  ])
  dyeShaped('minecraft:pink_dye', [
    'C  ',
    ' C ',
    '  C'
  ])
  dyeShaped('minecraft:lime_dye', [
    '  C',
    '  C',
    '  C'
  ])
  dyeShaped('minecraft:yellow_dye', [
    ' C ',
    ' C ',
    ' C '
  ])
  dyeShaped('minecraft:light_blue_dye', [
    'C  ',
    'C  ',
    'C  '
  ])
  dyeShaped('minecraft:magenta_dye', [
    '   ',
    '   ',
    'CCC'
  ])
  dyeShaped('minecraft:orange_dye', [
    '   ',
    'CCC',
    '   '
  ])
  dyeShaped('minecraft:blue_dye', [
    '   ',
    ' C ',
    'C C'
  ])
  dyeShaped('minecraft:brown_dye', [
    '  C',
    ' C ',
    '  C'
  ])
  dyeShaped('minecraft:black_dye', [
    '   ',
    'CC ',
    '  C'
  ])
  dyeShaped('minecraft:white_dye', [
    'CCC',
    '   ',
    '   '
  ])
})