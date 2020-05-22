import React from "react";
const TAG ='ApiClient';

export const getData=async()=>{
  let dat= JSON.parse(JSON.stringify(
  [
    {
      "id": 1,
      "name": {
        "english": "Bulbasaur",
        "japanese": "フシギダネ",
        "chinese": "妙蛙种子",
        "french": "Bulbizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 45
      }
    },
    {
      "id": 2,
      "name": {
        "english": "Ivysaur",
        "japanese": "フシギソウ",
        "chinese": "妙蛙草",
        "french": "Herbizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 63,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 60
      }
    },
    {
      "id": 3,
      "name": {
        "english": "Venusaur",
        "japanese": "フシギバナ",
        "chinese": "妙蛙花",
        "french": "Florizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 80,
        "Attack": 82,
        "Defense": 83,
        "Sp. Attack": 100,
        "Sp. Defense": 100,
        "Speed": 80
      }
    },
    {
      "id": 4,
      "name": {
        "english": "Charmander",
        "japanese": "ヒトカゲ",
        "chinese": "小火龙",
        "french": "Salamèche"
      },
      "type": [
        "Fire"
      ],
      "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Sp. Attack": 60,
        "Sp. Defense": 50,
        "Speed": 65
      }
    },
    {
      "id": 5,
      "name": {
        "english": "Charmeleon",
        "japanese": "リザード",
        "chinese": "火恐龙",
        "french": "Reptincel"
      },
      "type": [
        "Fire"
      ],
      "base": {
        "HP": 58,
        "Attack": 64,
        "Defense": 58,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        "Speed": 80
      }
    },
    {
      "id": 6,
      "name": {
        "english": "Charizard",
        "japanese": "リザードン",
        "chinese": "喷火龙",
        "french": "Dracaufeu"
      },
      "type": [
        "Fire",
        "Flying"
      ],
      "base": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Sp. Attack": 109,
        "Sp. Defense": 85,
        "Speed": 100
      }
    },
    {
      "id": 7,
      "name": {
        "english": "Squirtle",
        "japanese": "ゼニガメ",
        "chinese": "杰尼龟",
        "french": "Carapuce"
      },
      "type": [
        "Water"
      ],
      "base": {
        "HP": 44,
        "Attack": 48,
        "Defense": 65,
        "Sp. Attack": 50,
        "Sp. Defense": 64,
        "Speed": 43
      }
    },
    {
      "id": 8,
      "name": {
        "english": "Wartortle",
        "japanese": "カメール",
        "chinese": "卡咪龟",
        "french": "Carabaffe"
      },
      "type": [
        "Water"
      ],
      "base": {
        "HP": 59,
        "Attack": 63,
        "Defense": 80,
        "Sp. Attack": 65,
        "Sp. Defense": 80,
        "Speed": 58
      }
    },
    {
      "id": 9,
      "name": {
        "english": "Blastoise",
        "japanese": "カメックス",
        "chinese": "水箭龟",
        "french": "Tortank"
      },
      "type": [
        "Water"
      ],
      "base": {
        "HP": 79,
        "Attack": 83,
        "Defense": 100,
        "Sp. Attack": 85,
        "Sp. Defense": 105,
        "Speed": 78
      }
    },
    {
      "id": 10,
      "name": {
        "english": "Caterpie",
        "japanese": "キャタピー",
        "chinese": "绿毛虫",
        "french": "Chenipan"
      },
      "type": [
        "Bug"
      ],
      "base": {
        "HP": 45,
        "Attack": 30,
        "Defense": 35,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        "Speed": 45
      }
    },
    {
      "id": 11,
      "name": {
        "english": "Metapod",
        "japanese": "トランセル",
        "chinese": "铁甲蛹",
        "french": "Chrysacier"
      },
      "type": [
        "Bug"
      ],
      "base": {
        "HP": 50,
        "Attack": 20,
        "Defense": 55,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 30
      }
    },
    {
      "id": 12,
      "name": {
        "english": "Butterfree",
        "japanese": "バタフリー",
        "chinese": "巴大蝶",
        "french": "Papilusion"
      },
      "type": [
        "Bug",
        "Flying"
      ],
      "base": {
        "HP": 60,
        "Attack": 45,
        "Defense": 50,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        "Speed": 70
      }
    },
    {
      "id": 13,
      "name": {
        "english": "Weedle",
        "japanese": "ビードル",
        "chinese": "独角虫",
        "french": "Aspicot"
      },
      "type": [
        "Bug",
        "Poison"
      ],
      "base": {
        "HP": 40,
        "Attack": 35,
        "Defense": 30,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        "Speed": 50
      }
    },
    {
      "id": 14,
      "name": {
        "english": "Kakuna",
        "japanese": "コクーン",
        "chinese": "铁壳蛹",
        "french": "Coconfort"
      },
      "type": [
        "Bug",
        "Poison"
      ],
      "base": {
        "HP": 45,
        "Attack": 25,
        "Defense": 50,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        "Speed": 35
      }
    },
    {
      "id": 15,
      "name": {
        "english": "Beedrill",
        "japanese": "スピアー",
        "chinese": "大针蜂",
        "french": "Dardargnan"
      },
      "type": [
        "Bug",
        "Poison"
      ],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 40,
        "Sp. Attack": 45,
        "Sp. Defense": 80,
        "Speed": 75
      }
    },
    {
      "id": 16,
      "name": {
        "english": "Pidgey",
        "japanese": "ポッポ",
        "chinese": "波波",
        "french": "Roucool"
      },
      "type": [
        "Normal",
        "Flying"
      ],
      "base": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        "Speed": 56
      }
    },
    {
      "id": 17,
      "name": {
        "english": "Pidgeotto",
        "japanese": "ピジョン",
        "chinese": "比比鸟",
        "french": "Roucoups"
      },
      "type": [
        "Normal",
        "Flying"
      ],
      "base": {
        "HP": 63,
        "Attack": 60,
        "Defense": 55,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 71
      }
    },
    {
      "id": 18,
      "name": {
        "english": "Pidgeot",
        "japanese": "ピジョット",
        "chinese": "大比鸟",
        "french": "Roucarnage"
      },
      "type": [
        "Normal",
        "Flying"
      ],
      "base": {
        "HP": 83,
        "Attack": 80,
        "Defense": 75,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        "Speed": 101
      }
    },
    {
      "id": 19,
      "name": {
        "english": "Rattata",
        "japanese": "コラッタ",
        "chinese": "小拉达",
        "french": "Rattata"
      },
      "type": [
        "Normal"
      ],
      "base": {
        "HP": 30,
        "Attack": 56,
        "Defense": 35,
        "Sp. Attack": 25,
        "Sp. Defense": 35,
        "Speed": 72
      }
    },
    {
      "id": 20,
      "name": {
        "english": "Raticate",
        "japanese": "ラッタ",
        "chinese": "拉达",
        "french": "Rattatac"
      },
      "type": [
        "Normal"
      ],
      "base": {
        "HP": 55,
        "Attack": 81,
        "Defense": 60,
        "Sp. Attack": 50,
        "Sp. Defense": 70,
        "Speed": 97
      }
    },
    {
      "id": 21,
      "name": {
        "english": "Spearow",
        "japanese": "オニスズメ",
        "chinese": "烈雀",
        "french": "Piafabec"
      },
      "type": [
        "Normal",
        "Flying"
      ],
      "base": {
        "HP": 40,
        "Attack": 60,
        "Defense": 30,
        "Sp. Attack": 31,
        "Sp. Defense": 31,
        "Speed": 70
      }
    },
    {
      "id": 22,
      "name": {
        "english": "Fearow",
        "japanese": "オニドリル",
        "chinese": "大嘴雀",
        "french": "Rapasdepic"
      },
      "type": [
        "Normal",
        "Flying"
      ],
      "base": {
        "HP": 65,
        "Attack": 90,
        "Defense": 65,
        "Sp. Attack": 61,
        "Sp. Defense": 61,
        "Speed": 100
      }
    },
    {
      "id": 23,
      "name": {
        "english": "Ekans",
        "japanese": "アーボ",
        "chinese": "阿柏蛇",
        "french": "Abo"
      },
      "type": [
        "Poison"
      ],
      "base": {
        "HP": 35,
        "Attack": 60,
        "Defense": 44,
        "Sp. Attack": 40,
        "Sp. Defense": 54,
        "Speed": 55
      }
    },
    {
      "id": 24,
      "name": {
        "english": "Arbok",
        "japanese": "アーボック",
        "chinese": "阿柏怪",
        "french": "Arbok"
      },
      "type": [
        "Poison"
      ],
      "base": {
        "HP": 60,
        "Attack": 95,
        "Defense": 69,
        "Sp. Attack": 65,
        "Sp. Defense": 79,
        "Speed": 80
      }
    },
    {
      "id": 25,
      "name": {
        "english": "Pikachu",
        "japanese": "ピカチュウ",
        "chinese": "皮卡丘",
        "french": "Pikachu"
      },
      "type": [
        "Electric"
      ],
      "base": {
        "HP": 35,
        "Attack": 55,
        "Defense": 40,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        "Speed": 90
      }
    },
    {
      "id": 26,
      "name": {
        "english": "Raichu",
        "japanese": "ライチュウ",
        "chinese": "雷丘",
        "french": "Raichu"
      },
      "type": [
        "Electric"
      ],
      "base": {
        "HP": 60,
        "Attack": 90,
        "Defense": 55,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        "Speed": 110
      }
    },
    {
      "id": 27,
      "name": {
        "english": "Sandshrew",
        "japanese": "サンド",
        "chinese": "穿山鼠",
        "french": "Sabelette"
      },
      "type": [
        "Ground"
      ],
      "base": {
        "HP": 50,
        "Attack": 75,
        "Defense": 85,
        "Sp. Attack": 20,
        "Sp. Defense": 30,
        "Speed": 40
      }
    },
    {
      "id": 28,
      "name": {
        "english": "Sandslash",
        "japanese": "サンドパン",
        "chinese": "穿山王",
        "french": "Sablaireau"
      },
      "type": [
        "Ground"
      ],
      "base": {
        "HP": 75,
        "Attack": 100,
        "Defense": 110,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        "Speed": 65
      }
    },
    {
      "id": 29,
      "name": {
        "english": "Nidoran♀",
        "japanese": "ニドラン♀",
        "chinese": "尼多兰",
        "french": "Nidoran♀"
      },
      "type": [
        "Poison"
      ],
      "base": {
        "HP": 55,
        "Attack": 47,
        "Defense": 52,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 41
      }
    },
    {
      "id": 30,
      "name": {
        "english": "Nidorina",
        "japanese": "ニドリーナ",
        "chinese": "尼多娜",
        "french": "Nidorina"
      },
      "type": [
        "Poison"
      ],
      "base": {
        "HP": 70,
        "Attack": 62,
        "Defense": 67,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 56
      }
    },
    {
      "id": 31,
      "name": {
        "english": "Nidoqueen",
        "japanese": "ニドクイン",
        "chinese": "尼多后",
        "french": "Nidoqueen"
      },
      "type": [
        "Poison",
        "Ground"
      ],
      "base": {
        "HP": 90,
        "Attack": 92,
        "Defense": 87,
        "Sp. Attack": 75,
        "Sp. Defense": 85,
        "Speed": 76
      }
    },
    {
      "id": 32,
      "name": {
        "english": "Nidoran♂",
        "japanese": "ニドラン♂",
        "chinese": "尼多朗",
        "french": "Nidoran♂"
      },
      "type": [
        "Poison"
      ],
      "base": {
        "HP": 46,
        "Attack": 57,
        "Defense": 40,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        "Speed": 50
      }
    },
    {
      "id": 33,
      "name": {
        "english": "Nidorino",
        "japanese": "ニドリーノ",
        "chinese": "尼多力诺",
        "french": "Nidorino"
      },
      "type": [
        "Poison"
      ],
      "base": {
        "HP": 61,
        "Attack": 72,
        "Defense": 57,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        "Speed": 65
      }
    },
    {
      "id": 34,
      "name": {
        "english": "Nidoking",
        "japanese": "ニドキング",
        "chinese": "尼多王",
        "french": "Nidoking"
      },
      "type": [
        "Poison",
        "Ground"
      ],
      "base": {
        "HP": 81,
        "Attack": 102,
        "Defense": 77,
        "Sp. Attack": 85,
        "Sp. Defense": 75,
        "Speed": 85
      }
    },
    {
      "id": 35,
      "name": {
        "english": "Clefairy",
        "japanese": "ピッピ",
        "chinese": "皮皮",
        "french": "Mélofée"
      },
      "type": [
        "Fairy"
      ],
      "base": {
        "HP": 70,
        "Attack": 45,
        "Defense": 48,
        "Sp. Attack": 60,
        "Sp. Defense": 65,
        "Speed": 35
      }
    },
    {
      "id": 36,
      "name": {
        "english": "Clefable",
        "japanese": "ピクシー",
        "chinese": "皮可西",
        "french": "Mélodelfe"
      },
      "type": [
        "Fairy"
      ],
      "base": {
        "HP": 95,
        "Attack": 70,
        "Defense": 73,
        "Sp. Attack": 95,
        "Sp. Defense": 90,
        "Speed": 60
      }
    },
    {
      "id": 37,
      "name": {
        "english": "Vulpix",
        "japanese": "ロコン",
        "chinese": "六尾",
        "french": "Goupix"
      },
      "type": [
        "Fire"
      ],
      "base": {
        "HP": 38,
        "Attack": 41,
        "Defense": 40,
        "Sp. Attack": 50,
        "Sp. Defense": 65,
        "Speed": 65
      }
    },
    {
      "id": 38,
      "name": {
        "english": "Ninetales",
        "japanese": "キュウコン",
        "chinese": "九尾",
        "french": "Feunard"
      },
      "type": [
        "Fire"
      ],
      "base": {
        "HP": 73,
        "Attack": 76,
        "Defense": 75,
        "Sp. Attack": 81,
        "Sp. Defense": 100,
        "Speed": 100
      }
    },
    {
      "id": 39,
      "name": {
        "english": "Jigglypuff",
        "japanese": "プリン",
        "chinese": "胖丁",
        "french": "Rondoudou"
      },
      "type": [
        "Normal",
        "Fairy"
      ],
      "base": {
        "HP": 115,
        "Attack": 45,
        "Defense": 20,
        "Sp. Attack": 45,
        "Sp. Defense": 25,
        "Speed": 20
      }
    }
  ]))
return dat;
};