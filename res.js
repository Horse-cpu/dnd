data = {
	/* in 'items', the items are sorted into groups given by a name, as shown in "Melee"
	 * 
	 * The items consist of a name, a subtitle, properties, and a description (optional).
	 * In properties, all parts are optional. 
	 * There is damage, given as two items: the first is how it is displayed, 
	 *										the second is the dice code for it.
	 * There is also the damage type, rarity, properties, attack ability, range, cast_time, target, components, duration, classes.
	 */
	items: [
		{
			name: "Melee Weapons",
			e: [
				{
					name: "Club",
					subtitle: "melee weapon (simple)",
					properties: {
						damage: ["1d4", "(1d4)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Light"
					},
					description: "A large wooden club, good for hitting things with. Cannot be caught."
				}, // club
				{
					name: "Club, Medicinal",
					subtitle: "melee weapon (simple, club)",
					properties: {
						damage: ["2d6 - 7", "((2d6)-7)"],
						type: "Bludgeoning",
						rarity: "Rare",
						properties: "Light"
					},
					description: "A wooden club with a red plus on one side and a bloodstain on the other. Cannot be caught."
				}, // club, medicinal
				{
					name: "Club, Spiked",
					subtitle: "melee weapon (simple)",
					properties: {
						damage: ["2d4", "(2d4)"],
						type: "Bludgeoning / Piercing",
						rarity: "Standard",
						properties: "Light"
					},
					description: "A large wooden club with a number of spikes at the end. In the damage, the larger d4 is bludgeoning, the lesser d4 is piercing. Cannot be caught."
				}, // club, spiked
				{
					name: "Cyn Shadar",
					subtitle: "melee weapon (cursed item, simple, dagger)",
					properties: {
						dice: [
							["Roll Damage", () => { return eval(parse("Math.ceil((1d100) / (1d8))")); }]
						],
						damage: ["1d100 / 1d8", "Math.ceil((1d100)/(1d8))"],
						type: "Slashing / Piercing",
						rarity: "Unique",
						ability: "Dex",
						properties: "Finesse, One-Handed, Requires Attunement"
					},
					description: "Incredibly cursed dagger long lost to mortal beings. On a successful hit, the dagger will attach to the enemy and drain their life force. The dagger thirsts for blood when drawn so if it's attack misses it will deal 2d4 damage to the user instead. The dagger cannot be attuned by traditional means.",
					higher_levels: "Idk Fin but you wanted something here."
				}, // cyn shadar
				{
					name: "Dagger",
					subtitle: "melee weapon (simple, dagger)",
					properties: {
						damage: ["1d4", "(1d4)"],
						type: "Slashing / Piercing",
						rarity: "Standard",
						properties: "Finesse, Light, Range, Thrown",
						range: "20/60 ft."
					},
					description: "A small sword, or possible a large knife? It hurts whatever it is."
				}, // dagger
				{
					name: "Flail",
					subtitle: "melee weapon (martial, flail)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Finesse"
					},
					description: "A short stick with a chain and a spiked ball at the end.\n\nCannot be parried or caught."
				}, // flail
				{
					name: "Glaive",
					subtitle: "melee weapon (martial, polearm)",
					properties: {
						damage: ["1d10", "(1d10)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "Heavy, Range, Two-Handed",
						range: "8ft."
					},
					description: "A form of polearm, much like a machete on a big stick."
				}, // glaive
				{
					name: "Greataxe",
					subtitle: "melee weapon (martial, axe)",
					properties: {
						damage: ["1d12", "(1d12)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "Heavy, Two-Handed"
					},
					description: "A very large axe, used for war purposes. Cannot be parried or caught."
				}, // greataxe
				{
					name: "Greatclub",
					subtitle: "melee weapon (simple, club)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Two-Handed"
					},
					description: "A very large piece of wood, hewn fresh from a tree. Very good for hitting things with. Cannot be parried or caught."
				}, // greatclub
				{
					name: "Greatsword",
					subtitle: "melee weapon (martial, sword)",
					properties: {
						damage: ["2d6", "(2d6)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "Heavy, Two-Handed"
					},
					description: "A very large sword, too big for just one hand, but can take a hefty chunk out of an enemy if required to. Cannot be parried or caught."
				}, // greatsword
				{
					name: "Guisarme",
					subtitle: "melee weapon (martial, polearm)",
					properties: {
						damage: ["1d10", "(1d10)"],
						type: "Slashing",
						rarity: "Uncommon",
						properties: "Range, Two-Handed, Catching",
						range: "8ft."
					},
					description: "A form of polearm with a curved blade on the end and two hooks mounted: one at the back and one atop the blade. This allows the user to try to catch a melee weapon within range as a reaction once per turn, and also to use the hook to dismount any mounted enemies within range as an action."
				}, // guisarme
				{
					name: "Halberd",
					subtitle: "melee weapon (martial, polearm, axe)",
					properties: {
						damage: ["1d10", "(1d10)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "Range, Two-Handed",
						range: "8ft."
					},
					description: "A form of polearm, with a small axe-head atop it and a small spike opposite, and a very long spike forming the end of the mast."
				}, // halberd
				{
					name: "Hammer, Light",
					subtitle: "melee weapon (simple, hammer)",
					properties: {
						damage: ["1d4", "(1d4)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Light, Thrown",
						range: "20/60 ft."
					},
					description: "A hammer that is designed to be thrown at people."
				}, // hammer, light
				{
					name: "Hammer of Thunderbolts",
					subtitle: "melee weapon (martial, maul, hammer)",
					properties: {
						damage: ["2d6", "(2d6)"],
						type: "Bludgeoning",
						rarity: "Legendary",
						properties: "Heavy, Two-Handed, Requires Attunement, Melee Attacks +1, Melee Damage +1"
					},
					description: "You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon.\n\nYou must be wearing a belt of giant Strength (any variety) and Gauntlets of Ogre Power to attune to this weapon. The Attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an Attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die.\n\nThe Hammer also has 5 Charges.While attuned to it, you can expend 1 charge and make a Ranged weapon Attack with the Hammer, hurling it as if it had the Thrown property with a normal range of 20 feet and a Long Range of 60 feet.If the Attack hits, the Hammer unleashes a Thunderclap audible out to 300 feet.The target and every creature within 30 feet of it must succeed on a DC 17 Constitution saving throw or be Stunned until the end of your next turn.The Hammer regains 1d4 + 1 expended Charges daily at dawn."
				}, // hammer of thunderbolts
				{
					name: "Handaxe",
					subtitle: "melee weapon (simple, axe)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "Light, Range, Thrown",
						range: "20/60 ft."
					},
					description: "A small axe, very nicely balanced. Good for cutting an enemy manually or at a distance."
				}, // handaxe
				{
					name: "Javelin",
					subtitle: "melee weapon (simple, polearm, javelin)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Range, Thrown",
						range: "30/120 ft."
					},
					description: "A very large needle-like weapon, designed for throwing long distances and impaling a target."
				}, // javelin
				{
					name: "Lance",
					subtitle: "melee weapon (martial, lance)",
					properties: {
						damage: ["1d12", "(1d12)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Range",
						range: "8ft."
					},
					description: "You have disadvantage when you use a lance to Attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted."
				}, // lance
				{
					name: "Longsword",
					subtitle: "melee weapon (martial, sword)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "Versatile"
					},
					description: "A lengthy blade, with a long grip for when more force is needed."
				}, // longsword
				{
					name: "Mace",
					subtitle: "melee weapon (simple, mace)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Slashing",
						rarity: "Standard"
					},
					description: "A stick with either four blades on the end or a lot of spikes."
				}, // mace
				{
					name: "Maul",
					subtitle: "melee weapon (martial, polearm, maul)",
					properties: {
						damage: ["2d6", "(2d6)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Heavy, Two-Handed"
					},
					description: "A large form of polearm, designed to bludgeon and pierce armour. Cannot be parried."
				}, // maul
				{
					name: "Morningstar",
					subtitle: "melee weapon (martial, mace)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Piercing"
					},
					description: "A short handle with a fixed spiked ball at one end."
				}, // morningstar
				{
					name: "Parrying Dagger",
					subtitle: "melee weapon (martial, parrying dagger)",
					properties: {
						damage: ["1d4", "(1d4)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Dual-Wield, Finesse, Light, Parrying"
					},
					description: "A dagger with a surprising dull edge, but a very sharp point. The user can hold this in their off-hand if using a one-handed weapon and this allows them to parry a melee weapon attack withing range as a reaction once per turn, giving a +2 to their AC for that attack."
				}, // parrying dagger
				{
					name: "Pike",
					subtitle: "melee weapon (martial, polearm)",
					properties: {
						damage: ["1d10", "(1d10)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Heavy, Range, Two-Handed",
						range: "(1d16 + 9)ft."
					},
					description: "The longest non-magical form of polearm, these can be from 10ft to 25ft in length. When the pike is found, the range is calculated and that determines the length of that specific pike."
				}, // pike
				{
					name: "Poleflail",
					subtitle: "melee weapon (martial, polearm, flail)",
					properties: {
						damage: ["2d8", "(2d8)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Range",
						range: "8ft."
					},
					description: "A form of polearm with a very short chain connected to a spiked stick. When this hits a shield, the end whips around maiming the arm behind.\n\nCannot be parried or caught. Negates AC bonus from opponents shield."
				}, // poleflail
				{
					name: "Quarterstaff",
					subtitle: "melee weapon (simple, staff)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Versatile"
					},
					description: "A big piece of oak, rounded from a quarter of a log. Used by monks and people that enjoy the 'bonk' noise it makes."
				}, // quarterstaff
				{
					name: "Rapier",
					subtitle: "melee weapon (martial, sword)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Finesse, Parrying"
					},
					description: "A very long and thin, yet very flexible, sword. The user can parry a melee attack within range once per turn as a reaction, giving +2 to their AC on that attack. If holding another weapon that enables parrying, the user can only parry once per turn but the AC bonuses add."
				}, // rapier
				{
					name: "Sai",
					subtitle: "melee weapon (martial, dagger)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Uncommon",
						properties: "Finesse, Light, Dual-Wield, Catching"
					},
					description: "A dagger-sized weapon with two side-prongs. If you have two, you can wield both and attack with both, but you cannot use any bonus attacks if you do so. These can be used to try to catch a melee weapon within range as a reaction once per turn, and if you are dual-wielding you can try to catch a second attack once per turn with disadvantage."
				}, // sai
				{
					name: "Scimitar",
					subtitle: "melee weapon (martial, sword)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "One-Handed"
					},
					description: "A simple curved sword."
				}, // scimitar
				{
					name: "Shortsword",
					subtitle: "melee weapon (martial, sword)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Finesse, Light"
					},
					description: "A short blade, but very sharp. Good for quick drawing and suddenly stabbing things."
				}, // shortsword
				{
					name: "Spear",
					subtitle: "melee weapon (simple, polearm, javelin)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Range, Thrown, Versatile",
						range: "20/60 ft."
					},
					description: "A form of polearm, with a sharp arrowhead-like tip."
				}, // spear
				{
					name: "Sun Blade",
					subtitle: "melee weapon (martial, sword)",
					properties: {
						damage: ["1d10", "(1d10)"],
						type: "Radiant",
						rarity: "Rare",
						properties: "Finesse, Versatile, Melee Attacks + 2, Melee Damage +2, Requires Attunement",
					},
					description: "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus Action to cause a blade of pure Radiance to spring into existence, or make the blade disappear. While the blade exists, this magic Longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the Sun Blade.\n\nYou gain a +2 bonus to Attack and Damage Rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n\nThe sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an Action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.\n\nThis blade cannot be parried or caught."
				}, // sun blade
				{
					name: "Swordbreaker",
					subtitle: "melee weapon (martial, parrying dagger)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Slashing",
						rarity: "Rare",
						properties: "Dual-Wield, Finesse, Light, Catching, Parrying"
					},
					description: "A parrying dagger with a sharp edge one side and barbed notches cut into the other, designed to catch a bladed weapon. Once per turn, as a reaction, this weapon allows the user to either try to catch a melee weapon, with a +2 to their dex roll, or you can choose to parry a melee attack, giving a +2 to your AC for that attack. If you stab an opponent with it, it deals 4d6 damage but cannot be retrieved during combat."
				}, // swordbreaker
				{
					name: "Trident",
					subtitle: "melee weapon (martial, polearm, javelin)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Range, Thrown, Versatile, Catching",
						range: "8ft. melee, 20/60 ft. thrown"
					},
					description: "A three-pronged weapon. Can be used to try to catch an enemy's melee weapon within range as a reaction once per turn. ."
				}, // trident
				{
					name: "War Pick",
					subtitle: "melee weapon (martial, pick)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Piercing",
						rarity: "Standard"
					},
					description: "A large pickaxe, useful for if you want to pierce something or someone."
				}, // war pick
				{
					name: "Warhammer",
					subtitle: "melee weapon (martial, polearm, hammer)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Bludgeoning",
						rarity: "Standard",
						properties: "Versatile",
						range: "8ft."
					},
					description: "A form of polearm, this weapon is a very large hammerhead on a 6ft handle. Cannot be parried."
				}, // warhammer
				{
					name: "Whip",
					subtitle: "melee weapon (martial, whip)",
					properties: {
						damage: ["1d4", "(1d4)"],
						type: "Slashing",
						rarity: "Standard",
						properties: "Finesse, Range",
						range: "12ft"
					},
					description: "A long whip that can hit people, or try to catch their weapons as an attack."
				}, // whip
			]
		},
		{
			name: "Ranged Weapons",
			e: [
				{
					name: "Crossbow, Hand",
					subtitle: "ranged weapon (martial, crossbow)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Light, Loading, Range",
						range: "30/120 ft."
					},
					description: "A small, one-handed crossbow. Good for when you need to shoot something inconspicuously and guns havent been invented yet."
				}, // crossbow, hand
				{
					name: "Crossbow, Heavy",
					subtitle: "ranged weapon (martial, crossbow)",
					properties: {
						damage: ["1d10", "(1d10)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Heavy, Loading, Range, Two-Handed",
						range: "100/400 ft."
					},
					description: "A very large, solid crossbow. Requires heavy arrows, or disadvantage on damage with light. Good for when you not only need to kill something but also need to pin it to a wall."
				}, // crossbow, heavy
				{
					name: "Crossbow, Light",
					subtitle: "ranged weapon (simple, crossbow)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Loading, Range, Two-Handed",
						range: "80/320 ft.",
					},
					description: "A normal sized, well-crafted crossbow. Good for hunting due to its speed, but can't kill a bear as easily as other crossbows might."
				}, // crossbow, light
				{
					name: "Crossbow, Windlass",
					subtitle: "ranged weapon (martial, crossbow)",
					properties: {
						damage: ["6d6 + 4", "((6d6)+4)"],
						type: "Piercing",
						rarity: "Rare",
						properties: "Heavy, Loading, Range, Two-Handed",
						range: "400/1600 ft."
					},
					description: "A crossbow whos draw is so heavy that a form of winch is required to load it. Reloading this requires 2 consecutive actions. Requires heavy bolts for firing, or half damage if using normal bolts. Bolts are unrecoverable once fired."
				}, // crossbow, windlass
				{
					name: "Dart",
					subtitle: "ranged weapon (simple, dart)",
					properties: {
						damage: ["1d4", "(1d4)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Finesse, Range, Thrown",
						range: "20/60 ft."
					},
					description: "A 1ft. long dart, good for embedding into things."
				}, // dart
				{
					name: "Longbow",
					subtitle: "ranged weapon (martial, bow)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Ammunition, Heavy, Range, Two-Handed",
						range: "150/600 ft."
					},
					description: "A thin yet pliable bow born of yew, the standard of archers. Known for the distance it can cover, but also for the skill required to use it well. This weapon has disadvantage whilst moving."
				}, // longbow
				{
					name: "Net",
					subtitle: "ranged weapon (martial, net)",
					properties: {
						rarity: "Standard",
						properties: "Range, Thrown",
						range: "5/15 ft."
					},
					description: "A Large or smaller creature hit by a net is Restrained until it is freed. A net has no Effect on Creatures that are formless, or Creatures that are Huge or larger. A creature can use its Action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, Ending the Effect and destroying the net. When you use an Action, bonus Action, or Reaction to Attack with a net, you can make only one Attack regardless of the number of ATTACKS you can normally make."
				}, // net
				{
					name: "Oathbow",
					subtitle: "ranged weapon (martial, bow)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Piercing",
						rarity: "Very Rare",
						Properties: "Heavy, Range, Two-Handed, Requires Attunement",
						range: "150/600"
					},
					description: 'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my Enemies." When you use this weapon to make a Ranged Attack, you can, as a Command phrase, say, "Swift death to you who have wronged me." The target of your Attack becomes your Sworn Enemy until it dies or until dawn seven days later. You can have only one such Sworn Enemy at a time. When your Sworn Enemy dies, you can choose a new one after the next dawn.\n\nWhen you make a Ranged Attack roll with this weapon against your Sworn Enemy, you have advantage on the roll.In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to Long Range.If the Attack hits, your Sworn Enemy takes an extra 3d6 piercing damage.\n\nWhile your Sworn Enemy lives, you have disadvantage on Attack rolls with all other Weapons.\n\nAmmunition: You can use a weapon that has the Ammunition property to make a Ranged Attack only if you have Ammunition to fire from the weapon.Each time you Attack with the weapon, you expend one piece of Ammunition.Drawing the Ammunition from a Quiver, case, or other container is part of the Attack.At the end of the battle, you can recover half your expended Ammunition by taking a minute to Search the Battlefield.\n\nIf you use a weapon that has the Ammunition property to make a melee Attack, you treat the weapon as an Improvised Weapon.A sling must be loaded to deal any damage when used in this way.'
				}, // oathbow
				{
					name: "Pilum",
					subtitle: "ranged weapon (simple, polearm, javelin)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Range",
						range: "20/60 ft."
					},
					description: "A javelin with a long, thin metal neck after the handle leading to a spearhead, designed to pierce armour but has a habit of bending once hitting them, making removal very difficult. Once it hits the target, they get disadvantage on any dex throws until they remove it (1 action, dealing 1d4 damage to them). If missed, roll 1d4 and if a 1 is rolled the pilum is bent and unusable until repaired."
				}, // pilum
				{
					name: "Plumbata",
					subtitle: "ranged weapon (simple, dart)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Finesse, Range, Thrown",
						range: "60/120 ft."
					},
					description: "A heavier 1ft. long dart, designed to be held at the fins and thrown overhand or underhand."
				}, // plumbata
				{
					name: "Recurve Bow",
					subtitle: "ranged weapon (martial, bow)",
					properties: {
						damage: ["1d10", "(1d10)"],
						type: "Piercing",
						rarity: "Uncommon",
						properties: "Ammunition, Light, Range, Finesse, Two-Handed",
						range: "1000/2000 ft."
					},
					description: "A doubly-curved bow, giving extreme precision to the user. Requires light arrows, or half range and disadvantage on damage for heavy. Can be reliably used whilst mounted or whilst moving."
				}, // recurve bow
				{
					name: "Rock",
					subtitle: "ranged weapon (simple, rock)",
					properties: {
						damage: ["1d8", "(1d8)"],
						type: "Bludgeoning",
						rarity: "Common",
						properties: "Range, Two-Handed",
						range: "25/50 ft"
					},
					description: "A small rock, or a stalagtite, not designed for throwing but is surprisingly streamlined."
				}, // rock
				{
					name: "Rock, Large",
					subtitle: "ranged weapon (simple, rock)",
					properties: {
						damage: ["1d12", "(1d12)"],
						type: "Bludgeoning",
						rarity: "Common",
						properties: "Range, Two-Handed",
						range: "5/25 ft"
					},
					description: "A large rock, or a medium-sized boulder, not designed for throwing."
				}, // rock, large
				{
					name: "Shortbow",
					subtitle: "ranged weapon (simple, bow)",
					properties: {
						damage: ["1d6", "(1d6)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Ammunition, Range, Two-Handed",
						range: "80/320 ft"
					},
					description: "A small bow for shorter users, also used for training children."
				}, // shortbow
				{
					name: "Warbow",
					subtitle: "ranged weapon (martial, bow)",
					properties: {
						damage: ["1d12 + 4", "((1d12)+4)"],
						type: "Piercing",
						rarity: "Very Rare",
						properties: "Ammunition, Heavy, Range, Two-Handed, Requires Attunement",
						range: "250/900 ft."
					},
					description: "A fiercely powerful welsh bow, hewn from elm. Requires heavy arrows, or half damage for light. Any arrows that normally have disadvantage against certain armour do not when fired from this bow, and arrows that cannot penetrate certain armour only have disadvantage when fired from this bow.\n\nTo attune the bow, once a day you must make a DC16 streangth save to attempt to draw the bow. If a 1 is rolled, you pull a muscle and get disadvantage on all strength saves for that day and the next. If this succeeds for three days (not neccessarily consecutive), then the bow is attuned.\n\nCan also be used in close-quarters combat as a melee weapon, dealing 1d6 bludegoning damage. This weapon has disadvantage if the user is not stationary, or is mounted."
				}, // warbow
			]
		},
		{
			name: "Armor",
			e: [
				{
					name: "Armor of Invulnerability",
					subtitle: "heavy armour (armour)",
					properties: {
						rarity: "Legendary",
						properties: "AC 18, Disadvantage to Stealth, Requires Attunement"
					},
					description: "You have Resistance to nonmagical damage while you wear this armour. Additionally, you can use an Action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armour. Once this Special Action is used, it can't be used again until the next dawn."
				}, // armour of invulnerability
				{
					name: "Armor of Vulnerability",
					subtitle: "heavy armour (cursed item, armour)",
					properties: {
						rarity: "Rare"
					},
					description: "While wearing this armour, you have Resistance to one of the following damage types: bludgeoning, piercing, or slashing. The GM chooses the type or determines it randomly.\n\nThis armour is Cursed, a fact that is revealed only when an Identify spell is cast on the armour or you attune to it. Attuning to the armour Curses you until you are targeted by the Remove Curse spell or similar magic; removing the armour fails to end the curse. While Cursed, you have vulnerability to two of the three Damage Types associated with the armour (not the one to which it grants resistance)."
				}, // armour of vulnerability
				{
					name: "Chain, Elven",
					subtitle: "medium armour (armour)",
					properties: {
						rarity: "Rare",
						properties: "AC 14"
					},
					description: "You are considered proficient with this armour even if you lack Proficiency with Medium armour."
				}, // chain, elven
				{
					name: "Gauntlets of Ogre Power",
					subtitle: "adventuring gear (wondrous item, hands)",
					properties: {
						rarity: "Uncommon",
						properties: "Strength 19"
					},
					description: "Some very large, weight gauntlets. These will make it easier to batter things with."
				}, // gauntlets of ogre power
				{
					name: "Gauntlets of Resist Slashing",
					subtitle: "adventurin gear (wondrous item, hands)",
					properties: {
						rarity: "Uncommon",
						properties: "Catching"
					},
					description: "These gauntlets have a very reinforced webbing between the hand and the thumb, allowing the user to try to catch a melee weapon as a reaction once per turn."
				}, // gauntlets of resist slashing
				{
					name: "Hide Armor",
					subtitle: "medium armour (armour)",
					properties: {
						rarity: "Standard",
						properties: "AC 12"
					},
					description: "This crude armour consists of thick furs and pelts. It is commonly worn by Barbarian tribes, evil Humanoids, and other folk who lack access to the tools and materials needed to create better armour."
				}, // hide armour
				{
					name: "Leather Armor",
					subtitle: "light armour (armour)",
					properties: {
						rarity: "Standard",
						properties: "AC 11"
					},
					description: "The Breastplate and shoulder protectors of this armour are made of leather that has been stiffened by being boiled in oil. The rest of the armour is made of softer and more flexible materials."
				}, // leather armour
				{
					name: "Padded Armor",
					subtitle: "light armour (armour)",
					properties: {
						rarity: "Standard",
						properties: "AC 11, Disadvantage to Stealth"
					},
					description: "Padded armour consists of quilted layers of cloth and batting."
				}, // padded armour
				{
					name: "Plate",
					subtitle: "heavy armour (armour, plated)",
					properties: {
						rarity: "Standard",
						properties: "AC 18, Disadvantage to Stealth"
					},
					description: "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armour. Buckles and straps distribute the weight over the body."
				}, // plate
				{
					name: "Plate, Dwarven",
					subtitle: "heavy armour (armour, plated)",
					properties: {
						rarity: "Very Rare",
						properties: "AC 20, Disadvantage to Stealth"
					},
					description: "While wearing this armour, if an Effect moves you against your will along the ground, you can use your Reaction to reduce the distance you are moved by up to 10 feet."
				}, // plate, dwarven
				{
					name: "Plate, Half",
					subtitle: "medium armour (armour, plated)",
					properties: {
						rarity: "Standard",
						properties: "AC 15, Disadvantage to Stealth"
					},
					description: "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg Protection beyond simple greaves that are attached with leather straps."
				}, // plate, half
				{
					name: "Ring Mail",
					subtitle: "heavy armour (armour)",
					properties: {
						rarity: "Standard",
						properties: "AC 14, Disadvantage to Stealth"
					},
					description: "This armour is leather armour with heavy rings sewn into it. The rings help reinforce the armour against blows from Swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armour."
				}, // ring mail
				{
					name: "Scale Mail",
					subtitle: "medium armour (armour, plated)",
					properties: {
						rarity: "Standard",
						properties: "AC 14, Disadvantage on Stealth"
					},
					description: "This armour consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets."
				}, // scale mail
				{
					name: "Studded Leather",
					subtitle: "light armour (armour)",
					properties: {
						rarity: "Standard",
						properties: "AC 12"
					},
					description: "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes."
				}, // studded leather
				{
					name: "Studded Leather, Glamoured",
					subtitle: "light armour (armour)",
					properties: {
						rarity: "Rare",
						properties: "AC 13"
					},
					description: "Whilst wearing this armour, you can use a bonus Action to speak the armour's Command word and cause the armour to assume the Appearance of a normal set of clothing or some other kind of armour. You decide what it looks like, including color, style, and accessories, but the armour retains its normal bulk and weight. The illusory Appearance last until you use this property again or remove the armour."
				}, // studded leather, glamoured
				{
					name: "Shield",
					subtitle: "shield (shield)",
					properties: {
						rarity: "Standard",
						properties: "AC +2"
					},
					description: "A large piece of thin metal might be able to block a few attacks."
				}, // shield
				{
					name: "Shield, Animated",
					subtitle: "shield (shield)",
					properties: {
						rarity: "Very Rare",
						properties: "AC +2, Requires Attunement"
					},
					description: "While holding this Shield, you can speak its Command word as a bonus Action to cause it to animate. The Shield leaps into the air and hovers in your space to protect you as if you were Wielding it, leaving your hands free. The Shield remains animated for 1 minute, until you use a bonus Action to end this Effect, or until you are Incapacitated or die, at which point the Shield falls to the ground or into your hand if you have one free."
				}, // shield, animated
				{
					name: "Shield, Wooden",
					subtitle: "shield (shield)",
					properties: {
						rarity: "Standard",
						properties: "AC +2"
					},
					description: "A large piece of wood might be able to block a few attacks."
				}, // shield, wooden
				{
					name: "Splint Armor",
					subtitle: "heavy armour (armour)",
					properties: {
						rarity: "Standard",
						properties: "AC 17, Disadvantage to Stealth"
					},
					description: "This armour is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints."
				}, // splint armour
			]
		},
		{
			name: "Miscellaneous Items",
			e: [
				{
					name: "Arrow",
					subtitle: "ammunition (ammunition)",
					properties: {
						rarity: "Standard",
						properties: "Light"
					},
					description: "Just a standard bodkin point arrow, cheap to make and easy to use.\n\nThese arrows have disadvantage against any plated armour."
				}, // arrow
				{
					name: "Arrow, Broadhead",
					subtitle: "ammunition (ammunition)",
					properties: {
						properties: "+1d4 Slashing Damage, Light",
						rarity: "Standard",
						range: "Half"
					},
					description: "A more expensive arrowhead, with a large cutting edge designed to cause maximal internal bleeding, at the cost that it cannot fly as far. They can be recollected, but cannot be re-used until sharpened during a short rest.\n\nThese arrows cannot damage any plated armour."
				}, // arrow, broadhead
				{
					name: "Arrow, Heavy",
					subtitle: "ammunition (ammunition)",
					properties: {
						rarity: "Standard",
						properties: "Heavy"
					},
					description: "A bodkin arrow with a much thicker body than normal, for use with heavier bows."
				}, // arrow, heavy
				{
					name: "Arrow of Need",
					subtitle: "ammunition (wondrous item, ammunition)",
					properties: {
						rarity: "Very Rare"
					},
					description: "A magical arrow that deals the type of damage that your enemy is most vulnerable to, and returns to the user's quiver."
				}, // arrow
				{
					name: "Arrow of Slaying",
					subtitle: "ammunition (ammunition)",
					properties: {
						rarity: "Very Rare",
						properties: "Specification"
					},
					description: "An arrow of slaying is a Magic Weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both Arrows of Dragon slaying and Arrows of Blue Dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.\n\nOnce an arrow of slaying deals its extra damage to a creature, it becomes a nonmagical arrow."
				}, // arrow of slaying
				{
					name: "Bolt",
					subtitle: "ammunition (ammunition)",
					properties: {
						rarity: "Standard",
						properties: "Light"
					},
					description: "A steel bolt, shorter but heavier than an arrow, for putting holes in objects."
				}, // bolt
				{
					name: "Bolt, Broadhead",
					subtitle: "ammunition (ammunition)",
					properties: {
						rarity: "Standard",
						properties: "+1d4 Slashing Damage, Light",
						range: "Half"
					},
					description: "A more expensive bolt, but much more useful for warfare as it causes more internal damage, at the cost of flying less far. Must be resharpened before using again, during a short rest.\n\nThese arrows have disadvantage against any plated armour."
				}, // bolt, broadhead
				{
					name: "Bolt, Heavy",
					subtitle: "ammunition (ammunition)",
					properties: {
						rarity: "Standard",
						properties: "Heavy"
					},
					description: "A thick steel bolt, designed to hit things much harder."
				}, // bolt, heavy
				{
					name: "Bolt of Slaying",
					subtitle: "ammunition (ammunition)",
					properties: {
						rarity: "Very Rare",
						properties: "Specification"
					},
					description: "A bolt of slaying is a Magic Weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both Bolts of Dragon slaying and Bolts of Blue Dragon slaying. If a creature belonging to the type, race, or group associated with a bolt of slaying takes damage from the bolt, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.\n\nOnce a bolt of slaying deals its extra damage to a creature, it becomes a nonmagical bolt."
				}, // bolt of slaying
				{
					name: "Bag of Devouring",
					subtitle: "adventuring gear (wondrous item)",
					properties: {
						rarity: "Very Rare"
					},
					description: "A bag that looks like a Bag of Holding, but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice. Anything placed into the bag is devoured, and anything attatched to that (i.e. person) has a 50% chance of being pulled in. To escape, use a dc15 strength check. Things can be pulled out before they are destroyed with a dc20 strength check. Anything beginning its round in the bag is permanently destroyed."
				}, // bag of devouring
				{
					name: "Bag of Holding",
					subtitle: "adventuring gear (wondrous item)",
					properties: {
						rarity: "Uncommon"
					},
					description: "A small bag that contains an entrance to the 'bag plane', allowing for indefinite storage. If a bag of holding is ever placed into another, a black hole forms. Travellers tell tales of the bag man, a being that climbs out of an open bag of holding and steals people in their sleep into the 'bag plane', leaving behind one of the items that they placed into it."
				}, // bag of holding
				{
					name: "Bag of Luck",
					subtitle: "adventuring gear (wondrous item, random)",
					properties: {
						dice: [
							["Open the bag", () => {
								var options = [
									"You reach your hand in as the bag closes to a size that of the eye of a needle. You are pulled through, covering everything in a 10ft. radius in your blood and viscera, and anything you happenned to be holding or wearing, your skin for example.",
									"There doesn't seem to be anything in here, so you reach your hand in. Still empty, you retract your hand and the bag snaps shut, detaching all fingers from your dominant hand which are now in the closed bag. You cannot use two-handed weapons until your hand is healed.",
									"A full set of fingers from one hand, detached at the base knuckles, are in this bag.",
									"It makes a strange sound, so you close it. Roll 1d6 - 3.\n\nIf positive, you gain this many ears, the DM chooses where, and you get this many times advantage on hearing or stealth based checks.\n\nIf the number is negative, you lose that many ears. You get this many times disadvantage on hearing and stealth based rolls.",
									"You hear a whimpering sound from the bag, so you help the animal out of the bag. READ THE REST TO YOURSELF FIRST BEFORE SAYING ANYTHING!\n\nIf you had previously determined that you had a pet in the past, that is alive again and in the bag and cannot be killed by physical means.\n\nIf you did not determine this before, then you now believe unquestionably that this was your childhood pet. FOR YOU AND THE DM ONLY: the animal is a mimic, but will not attack you.",
									`${eval(parse("2d20"))} bees exit the bag`,
									`${eval(parse("(1d20)d20"))} bees exit the bag.`,
									`You stick your hand into the bag. Your bones now feel ${eval(parse("1d100"))}% wetter and hurt when you touch sulfur.`,
									"You put your hand in the bag, and a god pulls you through. Swap seats with the DM for an hour, he will play as you.",
									"You put your hand in and are immediately transported to the Shadowfell.",
									"A devil grabs you through the opening and pulls you into Hell.",
									"You look into the bag, and see yourself. The other you then punches you in the face, dealing your unarmed strike in damage.",
									"In the bag is a small amulet that seems magical. There is a note saying that it casts eldritch blast, but only on objects less than 3lbs.",
									`There is ${eval(parse("10d100"))} gold in the bag.`,
									`In the bag are ${eval(parse("1d20"))} portable holes.`,
									"In the bag is another bag of luck.",
									`In the bag is ${eval(parse("1d4"))} instant fortresses.`,
									`In the bag is ${eval(parse("1d4"))} folding boats.`,
									"The bag is empty, but slightly larger than it was before.",
									`Inside the bag is ${eval(parse("1d4"))} cards from the deck of many things.`,
									"Inside the bag is a ring, along with a note saying that it allows the user to cast wish. This ring immolates immediately after use, dealing 2d6 damage.",
									"Inside the bag are a very posh pair of glasses. You put them on, immediately reducing your normal vision unless you are wearing them. You get disadvantage on any sight-based checks unless wearing the glasses.",
									"Inside the bag is a second pair of whatever armour you are wearing currently.",
									"A beholder exits the bag.",
									"1d100 badgers exit the bag",
									"Inside the bag is a melee weapon of the DMs choosing.",
									"Inside the bag is a ranged weapon of the DMs choosing.",
									"Inside the bag is a magic weapon of the DMs choosing.",
									"Inside the bag is the instructions for a spell of the DMs choosing.",
									"Inside the bag is an exact clone of you. It is dead, but has everything you have.",
									"An owlbear exits the bag.",
									"Inside the bag is a rhyming dagger, and a note saying 'I have swagger, please become a dagger.'",
									"Inside the bag is a rhyming dagger, and a note saying 'Rhyming dagger, I'm an ape, turn back to original shape.'",
									"Inside the bag is a rhyming dagger, and a note saying 'Rhyming dagger, Rhyming dagger, my name is not Ben. Turn into a dagger so that you can be used again.'",
									"Inside the bag is a fuzzy ball, one that would come from a grey bag of tricks.",
									"Inside the bag is a fuzzy ball, one that would come from a rust coloured bag of tricks.",
									"Inside the bag is a fuzzy ball, one that would come from a tan bag of tricks.",
									`The bag grows legs and fur and becomes a hostile beast that came from a grey bag of tricks, roll for initiative.`,
									"The bag grows legs and fur and becomes a hostile beast that came from a rust coloured bag of tricks, roll for initiative.",
									"The bag grows legs and fur and becomes a hostile beast that came from a tan bag of tricks, roll for initiative.",
									"You see a large room with a fireplace and an armchair, and a lot of filled bookshelves. You step inside and the bag closes behind you.",
									"You just see an endless void, but the bag resists being closed.\n\nFOR THE DM TO READ ONLY: Whenever the bag is not being looked at by the person who opened it, soaking wet people slowly begin to emerge from the bag like in 'Other side of the box'. They are hostile.",
									"In the bag is a beautifully ornate sword engraved with flower petals, and a note saying 'Whenever you look away, it will be as if it were never there'. This sword does 4d6 damage.",
									"You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.", "You see an endless void.",
									"Inside the bag is an Efficient Quiver.",
									`Inside the bag is a warbow, and ${eval(parse("1d100"))} heavy arrows.`,
									"Inside the bag is a Bolt of Slaying John Yates and an Arrow of Slaying Christine Walker. You must take exactly one, and it cannot leave your hand until the bolt hits the target, at which point it will deal its damage and then immolate dealing a further 6d8 damage to the target. You may only use one-handed weapons wilst holding the bolt/arrow in the other hand.",
									`A suit of armour is in the bag. Putting it on, your AC is now ${eval(parse("1d12"))} more than whatever it was before. You are also now wearing an animated armour which may randomly decide to do things.`,
									"An Aboleth exits the bag, along with 400 cubic feet of water.",
									`${eval(parse("1d100"))} bats exit the bag.`, `${eval(parse("1d100"))} bags fly out of the bag.`,
									"The bag contains a hammer.", "The bag contains a hammer.", "The bag contains a hammer.",
									"The bag is filled with universal solvent.",
									"The bag contains a shovel.",
									"The bag contains a slightly larger bag.",
									"A hand reaches out of the bag as you try to open it and closes the drawstring."
								];
								return options[Math.floor(Math.random() * options.length)];
							}]
						],
						rarity: "Unique"
					},
					description: "Upon being opened, it may pull an object or entity from any plane of existence, it may become a portal directly to another plane of existence, or something else entirely.\n\nPositively, do not open."
				}, // bag of luck
				{
					name: "Bag of Scalding",
					subtitle: "adventuring gear (wondrous item)",
					properties: {
						rarity: "Rare"
					},
					description: "A bag that looks identical to a bag of holding, but only contains an entrance to the 'boiling water plane'."
				}, // bag of scalding
				{
					name: "Bag of Tricks",
					subtitle: "adventuring gear (wondrous item, random)",
					properties: {
						dice: [
							["Grey Bag", () => {
								var x = Math.ceil((1 - Math.random()) * 8);
								switch (x) {
									case 1: return "Weasel";
									case 2: return "Rat, Giant";
									case 3: return "Badger";
									case 4: return "Boar";
									case 5: return "Panther";
									case 6: return "Badger, Giant";
									case 7: return "Wolf, Dire";
									default: return "Elk, Giant";
								}
							}],
							["Rust Bag", () => {
								var x = Math.ceil((1 - Math.random()) * 8);
								switch (x) {
									case 1: return "Rat";
									case 2: return "Owl";
									case 3: return "Mastiff";
									case 4: return "Goat";
									case 5: return "Goat, Giant";
									case 6: return "Boar, Giant";
									case 7: return "Lion";
									default: return "Bear, Brown";
								}
							}],
							["Tan Bag", () => {
								var x = Math.ceil((1 - Math.random()) * 8);
								switch (x) {
									case 1: return "Jackal";
									case 2: return "Ape";
									case 3: return "Baboon";
									case 4: return "Axe Beak";
									case 5: return "Bear, Black";
									case 6: return "Weasel, Giant";
									case 7: return "Hyena, Giant";
									default: return "Tiger";
								}
							}]
						],
						rarity: "Uncommon"
					},
					description: "A small bag, either grey, rust, or tan cloth. It only contains a small, fuzzy object. This can be thrown, and when it lands it becomes a monster determined by a d8 using the creature table for that colour bag."
				}, // bag of tricks
				{
					name: "Deck of Many Things",
					subtitle: "adventuring gear (wondrous item, random)",
					properties: {
						dice: [
							["Pull A Card", () => {
								var options = [
									"Your alignment changed to the exact opposite of what it is currently. No effect if rtue neutral or unaligned.",
									"Gain a level if you defeat the next monster single-handedly.",
									"You disappear and are entombed in an extradiemnsional sphere in suspended animation. All clothing and items remain where you were. You remain this way until found and removed from the sphere. No divination magic other than Wish can locate the sphere.",
									"You are cursed, take a -2 penalty on saving throws. Only a god or another card can end the curse.",
									"You can avoid or erase any event of your choosing, this can be used once at any time before death.",
									"A powerful devil becomes your enemy, and will attempt to ruin your life before killing you. This ends when one of you dies.",
									"You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.",
									"Twenty-five pieces of jewelery worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.",
									"Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.",
									"You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.",
									"A rare or rarer Magic Weapon with which you are proficient appears in your hands. The DM chooses the weapon.",
									"You gain the service of a 4th-level Fighter who appears in a space you choose within 30 feet of you. The Fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.",
									"You are granted the ability to cast the wish spell 1d3 times.",
									"A nonplayer character of the DM's choice becomes Hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a wish spell or Divine Intervention can end the NPC's hostility toward you.",
									"All forms of Wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.",
									"You summon an avatar of death-a ghostly Humanoid Skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DM's choice within 10 feet of you and ATTACKS you, warning all Others that you must win the battle alone. The avatar fights until you die or it drops to 0 Hit Points, whereupon it disappears. If anyone tries to help you, the helper summons its own Avatar of Death. A creature slain by an Avatar of Death can't be restored to life.",
									"Increase one of your Ability Scores by 2. The score can exceed 20 but can't exceed 24.",
									"You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.",
									"Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do Vanish.",
									"You gain Proficiency in the Persuasion skill, and you double your Proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of Monsters, which you must clear out before you can claim the keep as yours.",
									"At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with Wisdom on how to apply it.",
									"This black card Spells Disaster. Your soul is drawn from your body and contained in an object in a place of the DM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is Incapacitated. A wish spell can't restore your soul, but the spell reveals the Location of the object that holds it. You draw no more cards."
								];
								return options[Math.floor(Math.random() * options.length)];
							}]
						],
						rarity: "Legendary"
					},
					description: "This is a deck of magical playing cards, made of ivory or vellum. You first declare how many cards you wish to draw, then pull them at random from a deck of cards to decide what happens, using the table."
				}, // deck of many things
				{
					name: "Folding Boat",
					subtitle: "adventuring gear (wondrous item)",
					properties: {
						rarity: "Rare"
					},
					description: "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three Command words, each requiring you to use an Action to speak it.\n\nOne Command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep.The boat has one pair of oars, an anchor, a mast, and a lateen sail.The boat can hold up to four Medium Creatures comfortably.\n\nThe second Command word causes the box to unfold into a ship 24 feet long, 8 feet wide; and 6 feet deep.The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail.The ship can hold fifteen Medium Creatures comfortably.\n\nWhen the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.\n\nThe third Command word causes the folding boat to fold back into a box, provided that no Creatures are aboard.Any Objects in the vessel that can't fit inside the box remain outside the box as it folds. Any Objects in the vessel that can fit inside the box do so."
				}, // folding boat
				{
					name: "Grappling Hook",
					subtitle: "adventuring gear",
					properties: {
						rarity: "Standard"
					},
					description: "Four hooks forged together on the end of a rope, good for climbing buildings."
				}, // grappling hook
				{
					name: "Hammer",
					subtitle: "adventuring gear",
					properties: {
						rarity: "Standard"
					},
					description: "A normal hammer, not big enough to be used as a weapon but could probably still kill a man nonetheless."
				}, // hammer
				{
					name: "Hunting Trap",
					subtitle: "adventuring gear",
					properties: {
						damage: ["1d4", "(1d4)"],
						type: "Piercing",
						rarity: "Standard",
						properties: "Dexterity Save"
					},
					description: "When you use your Action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its Movement is limited by the length of the chain (typically 3 feet long). A creature can use its Action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
				}, // hunting trap
				{
					name: "Immovable Rod",
					subtitle: "adventuring gear (rod)",
					properties: {
						rarity: "Uncommon"
					},
					description: "A rod with a button at one end. Upon the button being pressed (action required), the rod will no longer move even in the face of gravity or up to 8000lbs weight. To deactivate, the button must be pressed again, or too much weight be upheld by it."
				}, // immovable rod
				{
					name: "Instant Fortress",
					subtitle: "adventuring gear (wondroud item)",
					properties: {
						rarity: "Rare"
					},
					description: "You can use an Action to place this 1-inch metal cube on the ground and speak its Command word. The cube rapidly grows into a fortress that remains until you use an Action to speak the Command word that dismisses it, which works only if the fortress is empty.\n\nThe fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a Ladder running along one wall to connect them. The Ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your Command, which you can speak as a bonus Action. It is immune to the knock spell and similar magic, such as that of a Chime of Opening.\n\nEach creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren’t being worn or carried take this damage and are pushed automatically.\n\nThe tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 Hit Points, immunity to damage from nonmagical Weapons excluding siege Weapons, and Resistance to all other damage. Only a wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th Level or lower). Each casting of wish causes the roof, the door, or one wall to regain 50 Hit Points."
				}, // instant fortress
				{
					name: "Manacles",
					subtitle: "adventuring gear",
					properties: {
						rarity: "Standard"
					},
					description: "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 Hit Points."
				}, // manacles
				{
					name: "Portable Hole",
					subtitle: "adventuring gear (wondrous item)",
					properties: {
						rarity: "Very Rare"
					},
					description: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n\nYou can use an Action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open Passages. Any creature inside an open portable hole can exit the hole by climbing out of it.\n\nYou can use an Action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any Creatures or Objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.\n\nIf the hole is folded up, a creature within the hole's extradimensional space can use an Action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.\n\nPlacing a portable hole inside an extradimensional space created by a bag of holding, handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The Gate originates where the one item was placed inside the other. Any creature within 10 feet of The Gate is sucked through it and deposited in a random Location on the Astral Plane. The Gate then closes. The Gate is one-way only and can't be reopened."
				}, // portable hole
				{
					name: "Portable Ram",
					subtitle: "adventuring gear",
					properties: {
						rarity: "Uncommon"
					},
					description: "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
				}, // portable ram
				{
					name: "Quiver",
					subtitle: "adventuring gear",
					properties: {
						rarity: "Standard"
					},
					description: "A quiver can hold up to 20 arrows."
				}, // quiver
				{
					name: "Quiver, Efficient",
					subtitle: "adventuring gear (wondroud item)",
					properties: {
						rarity: "Uncommon"
					},
					description: "Each of the quiver's three compartments connects to an extradimensional space that allow the Quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty Arrows, bolts, or similar Objects. The midsize compartment holds up to eighteen javelins or similar Objects. The longest compartment holds up to six long Objects, such as bows, quarterstaffs, or spears.\n\nYou can draw any item the Quiver contains as if doing so from a regular Quiver or scabbard."
				}, // quiver, efficient
				{
					name: "Rhyming Dagger",
					subtitle: "adventuring gear (wondrous item, dagger)",
					properties: {
						rarity: "Very Rare"
					},
					description: "This is a magical dagger that is completely blunt but can transform into any non-magical object if the user can fit it into a request that rhymes (1 action), i.e. 'If I cannot escape this hole I will be sadder, so please blade turn into a very tall ladder.' The user can then spend an action to transform it back into a dagger with another rhyming request. It must be in dagger form to transform into another object."
				}, // rhyming dagger
				{
					name: "Shovel",
					subtitle: "adventuring gear",
					properties: {
						rarity: "Standard"
					},
					description: "A sturdy, reliable tool for making holes in the ground. Can be used as a melee weapon for 1d4 bludgeoning damage."
				}, // shovel
				{
					name: "Universal Solvent",
					subtitle: "adventuring gear (wondrous item)",
					properties: {
						rarity: "Legendary"
					},
					description: "This tube holds milky liquid with a strong alcohol smell. You can use an Action to pour the Contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue."
				}, // universal solvent
			]
		},
		{
			name: "Spells",
			e: [
				{
					name: "Eldritch Blast",
					subtitle: "cantrip evocation",
					properties: {
						cast_time: "1 action",
						range: "120 ft.",
						target: "A creature within range",
						components: "V S",
						duration: "Instantaneous",
						classes: "Warlock"
					},
					description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
					higher_levels: "Two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
				}, // eldritch blast
				{
					name: "Hold Person",
					subtitle: "2nd level enchantment",
					properties: {
						cast_time: "1 action",
						range: "60 ft.",
						target: "A humanoid that you can see withing range",
						components: "V S M (A small, straight piece of iron)",
						duration: "Concentration, Up to 1 minute",
						classes: "Bard, Cleric, Druid, Sorcerer, Warlock, Wizard"
					},
					description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
					higher_levels: "When you cast this spell using a spell slot of 3rd level or higher, you can target on additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
				}, // hold person
				{
					name: "Lightning Bolts",
					subtitle: "3rd level evocation",
					properties: {
						cast_time: "1 action",
						range: "Self (100ft line)",
						target: "Self (100ft line)",
						components: "V S M (A bit of fur and a rod of amber, crystal, or glass)",
						duration: "Instantaneous",
						classes: "Sorcerer, Wizard"
					},
					description: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren’t being worn or carried.",
					higher_levels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot above 3rd."
				}, // lightning bolts
			]
		},
		{
			name: "Modifiers",
			e: [
				{
					name: "Frost Brand",
					subtitle: "weapon (any sword)",
					properties: {
						rarity: "Very Rare",
						properties: "Requires Attunement"
					},
					description: "When you hit with an Attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have Resistance to fire damage.\n\nIn freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n\nWhen you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you.This property can be used no more than once per hour."
				}, // frost brand
				{
					name: "Giant Slayer",
					subtitle: "weapon (any axe or sword)",
					properties: {
						rarity: "Rare"
					},
					description: "You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon.\n\nWhen you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall prone. For the Purpose of this weapon, 'giant' refers to any creature with the giant type, including Ettins and Trolls."
				}, // giant slayer
				{
					name: "Holy Avenger",
					subtitle: "weapon (any sword)",
					properties: {
						properties: "Requires Attunement by Paladin"
					},
					description: "You gain a +3 bonus to Attack and Damage Rolls made with this Magic Weapon. When you hit a fiend or an Undead with it, that creature takes an extra 2d10 radiant damage.\n\nWhile you hold the drawn sword, it creates an aura in a 10-foot radius around you.You and all Creatures friendly to you in the aura have advantage on Saving Throws against Spells and other Magical Effects.If you have 17 or more levels in the Paladin class, the radius of the aura increases to 30 feet."
				}, // holy avenger
				{
					name: "Luck Blade",
					subtitle: "weapon (any sword)",
					properties: {
						rarity: "Legendary",
						properties: "Requires Attunement"
					},
					description: "You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon. While the sword is on your person, you also gain a +1 bonus to saving throws.\n\nIf the sword is on your person, you can call on its luck (no Action required) to Reroll one Attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can’t be used again until the next dawn.\n\nThe sword has 1d4 – 1 charges. While holding it, you can use an Action to expend 1 charge and cast the wish spell from it. This property can’t be used again until the next dawn. The sword loses this property if it has no Charges."
				}, // luck blade
				{
					name: "Life Stealing",
					subtitle: "weapon (any sword)",
					properties: {
						rarity: "Rare",
						properties: "Requires Attunement"
					},
					description: "When you Attack a creature with this Magic Weapon and roll a 20 on the Attack roll, that target takes an extra 3d6 necrotic damage, provided that the target isn’t a construct or an undead. You gain temporary Hit Points equal to the extra damage dealt."
				}, // life stealing
				{
					name: "Mithral Armor",
					subtitle: "armour (medium or heavy, but not hide)",
					properties: {
						rarity: "Uncommon"
					},
					description: "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armour normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armour doesn’t."
				}, // mithral armour
				{
					name: "Nine Lives Stealer",
					subtitle: "weapon (any sword)",
					properties: {
						rarity: "Very Rare",
						properties: "Requires Attunement"
					},
					description: "You gain a +2 bonus to Attack and Damage Rolls made with this Magic Weapon.\n\nThe sword has 1d8 + 1 Charges. If you score a critical hit against a creature that has fewer than 100 Hit Points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a Construct or an Undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no Charges remaining, it loses this property."
				}, // nine lives stealer
				{
					name: "Sharpness",
					subtitle: "weapon (any sword that deals slashing damage)",
					properties: {
						rarity: "Very Rare",
						properties: "Requires Attunement"
					},
					description: "When you Attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n\nWhen you Attack a creature with this weapon and roll a 20 on the Attack roll, that target takes an extra 4d6 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target’s limbs, with the Effect of such loss determined by the GM. If the creature has no limb to sever, you lop off a portion of its body instead.\n\nIn addition, you can speak the sword’s Command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the Command word again or sheathing the sword puts out the light."
				}, // sharpness
				{
					name: "Wounding",
					subtitle: "weapon (any sword that does piercing damage)",
					properties: {
						rarity: "Rare",
						properties: "Requires Attunement"
					},
					description: "Hit Points lost to this weapon’s damage can be regained only through a short or Long Rest, rather than by regeneration, magic, or any other means.\n\nOnce per turn, when you hit a creature with an Attack using this Magic Weapon, you can wound the target. At the start of each of the wounded creature’s turns, it takes 1d4 necrotic damage for each time you’ve wounded it, and it can then make a DC 15 Constitution saving throw, Ending the Effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an Action to make a DC 15 Wisdom (Medicine) check, Ending the Effect of such wounds on it on a success."
				}, // wounding
			]
		},
		{
			name: "Feats",
			e: [
				{
					name: "Defensive Duelist",
					subtitle: "Prerequisits: Dexterity 13 or higher",
					properties: {},
					description: "You can add your proficiency bonus to your AC if you are wielding a finesse weapon, in reaction to a melee attack."
				}, // defensive duelist
			]
		}
	],
	/* In 'enemies', there are categories just like in items.
	 * An enemy is given a name, a subtitle, properties, attributes, feats, actions, (optional) reactions, (optional) legendary, and (optional) description
	 * In properties, there is ac (given as a pair of value and armour type), hp (again given as two items, one for display the other for code),
	 *		speed, perception, (optional) languages, (optional) skills, (optional) senses, (optional) saves, (optional) dammage_resist, (optional) condition_resist, (optional) dammage_immune, (optional) condition_immune
	 *		
	 * The attributes are given as pairs, the first is the value, the second is the modifier
	 * Feats are dfined in a list by a name and description
	 * Actions are defined in a list by name, attack, hit, (optional) description.
	 *		Attack is also optional, but if you have attack you need hit.
	 *		In attack, there is damage type, bonus, range, and targets
	 *		In hit, there is damage (as a pair again), and damage type
	 * Reactions is just like actions
	 * Legendary takes a number (how many it gets to spend per round), and a list of actions, 
	 *		which are the same as normal actions.
	 */
	enemies: [
		{
			name: "Aberration",
			e: [
				{
					name: "Aboleth",
					subtitle: "large aberration, lawful evil",
					properties: {
						ac: [17, "(Natural Armor)"],
						hp: ["135 (18d10 + 36)", "((18d10)+36)"],
						speed: "10 ft., swim 40ft.",
						saves: "Con +6, Int +8, Wis +6",
						skills: "History +12, Perception +10",
						senses: "Darkvision 120 ft.",
						perception: 20,
						languages: "Deep Speech, Telepathy 120 ft."
					},
					attributes: {
						str: [21, 5],
						dex: [9, -1],
						con: [15, 2],
						int: [18, 4],
						wis: [15, 2],
						cha: [18, 4]
					},
					feats: [
						{
							name: "Amphibious",
							description: "The aboleth can breathe air and water."
						},
						{
							name: "Mucous Cloud",
							description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
						},
						{
							name: "Probing Telepathy",
							description: " If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
						}
					],
					actions: [
						{
							name: "Multiattack",
							description: "The aboleth makes three tentacle attacks."
						},
						{
							name: "Tentacle",
							attack: {
								type: "Melee",
								bonus: 9,
								range: "10 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(2d6+5)", "((2d6)+5)"],
								type: "bludgeoning"
							},
							description: "If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed"
						},
						{
							name: "Tail",
							attack: {
								type: "Melee",
								bonus: 9,
								range: "10 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(3d6 + 5)", "((3d6)+5)"],
								type: "bludgeoning"
							}
						},
						{
							name: "Enslave (3/day)",
							description: "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
						}
					],
					legendary: {
						number: 3,
						e: [
							{
								name: "Detect (Cost: 1)",
								description: "The aboleth makes a Wisdom (Perception) check."
							},
							{
								name: "Tail Swipe (Cost: 1)",
								description: "The aboleth makes one tail attack."
							},
							{
								name: "Psychic Drain (Cost: 2)",
								description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
							}
						]
					},
					description: "I'm not even going to try to describe this."
				}, // aboleth
			]
		},
		{
			name: "Beast",
			e: [
				{
					name: "Ape",
					subtitle: "medium beast (ape), unaligned",
					properties: {
						ac: [12, ""],
						hp: ["19 (3d8 + 6)", "((3d8)+6)"],
						speed: "30 ft., climb 30 ft.",
						skills: "Athletics +5, Perception +3",
						perception: 13
					},
					attributes: {
						str: [16, 3],
						dex: [14, 2],
						con: [14, 2],
						int: [6, -2],
						wis: [12, 1],
						cha: [7, -2]
					},
					feats: [],
					actions: [
						{
							name: "Multiattack",
							description: "The ape makes two fist attacks."
						},
						{
							name: "Fist",
							attack: {
								type: "Melee",
								bonus: 5,
								range: "5 ft.",
								target: "one target"
							},
							hit: {
								damage: ["(1d6 + 3)", "((1d6)+3)"],
								type: "bludgeoning"
							}
						},
						{
							name: "Rock",
							attack: {
								type: "Ranged",
								bonus: 5,
								range: "25/50 ft.",
								target: "one target"
							},
							hit: {
								damage: ["(1d6 + 3)", "((1d6)+3)"],
								type: "bludgeoning"
							}
						}
					],
					description: "A large, hairy animal. Very proficient with climbing trees and throwing things at you."
				}, // ape
				{
					name: "Baboon",
					subtitle: "small beast (ape), unaligned",
					properties: {
						ac: [12, ""],
						hp: ["3 (1d6)", "(1d6)"],
						speed: "30 ft., climb 30 ft.",
						perception: 11
					},
					attributes: {
						str: [8, -1],
						dex: [14, 2],
						con: [11, 0],
						int: [4, -3],
						wis: [12, 1],
						cha: [6, -2]
					},
					feats: [
						{
							name: "Pack Tactics",
							description: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
						}
					],
					actions: [
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 1,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d4 - 1)", "((1d4)-1)"],
								type: "piercing"
							}
						}
					],
					description: "A type of ape, but smaller and more social."
				}, // baboon
				{
					name: "Badger",
					subtitle: "tiny beast (mustelid), unaligned",
					properties: {
						ac: [10, ""],
						hp: ["3 (1d4 + 1)", "((1d4)+1)"],
						speed: "20 ft, burrow 5 ft",
						perception: 11,
						skills: "Stealth +4",
						senses: "Darkvision 30 ft",
						languages: "Common, Badger"
					},
					attributes: {
						str: [4, -3],
						dex: [11, 0],
						con: [12, 1],
						int: [2, -4],
						wis: [12, 1],
						cha: [5, -3]
					},
					feats: [
						{
							name: "Keen Smell",
							description: "The badger has advantage on Wisdom (Perception) checks that rely on smell."
						}
					],
					actions: [
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 2,
								range: "5 ft",
								targets: "one target"
							},
							hit: {
								damage: ["(1d1)", "1"],
								type: "piercing"
							}
						}
					],
					description: "A tiny black animal with a white stripe down the face that burrows into the ground and predates ferrets."
				}, // badger
				{
					name: "Badger, Giant",
					subtitle: "medium beast (mustelid), unaligned",
					properties: {
						ac: [10, ""],
						hp: ["13 (2d8 + 4)", "((2d8)+4)"],
						speed: "30 ft, burrow 10 ft",
						perception: 11,
						senses: "Darkvision 30 ft",
						languages: "Common, Badger"
					},
					attributes: {
						str: [13, 1],
						dex: [10, 0],
						con: [15, 2],
						int: [2, -4],
						wis: [12, 1],
						cha: [5, -3]
					},
					feats: [
						{
							name: "Keen Smell",
							description: "The badger has advantage on Wisdom (Perception) checks that rely on smell."
						}
					],
					actions: [
						{
							name: "Multiattack",
							description: "The badger makes two attacks: one with its bite and one with its claws."
						},
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 3,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 1)", "((1d6)+1)"],
								type: "piercing"
							}
						},
						{
							name: "Claws",
							attack: {
								type: "Melee",
								bonus: 3,
								range: "5 ft",
								targets: "one target"
							},
							hit: {
								damage: ["(2d4 + 1)", "((2d4)+1)"],
								type: "slashing"
							}
						}
					],
					description: "A large, bear-sized, black animal with a white stripe down the face that burrows into the ground and predates deer."
				}, // badger, giant
				{
					name: "Bat",
					subtitle: "tiny beast (flying), unaligned",
					properties: {
						ac: [12, ""],
						hp: ["1 (1d4 - 1)", "((1d4)-1)"],
						speed: "5 ft., fly 30 ft.",
						senses: "Blindsight 60 ft.",
						perception: 11
					},
					attributes: {
						str: [2, -4],
						dex: [15, 2],
						con: [8, -1],
						int: [2, -4],
						wis: [12, 1],
						cha: [4, -3]
					},
					feats: [
						{
							name: "Echolocation",
							description: "The bat can't use its blindsight while deafened."
						},
						{
							name: "Keen Hearing",
							subtitle: "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
						}
					],
					actions: [
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 0,
								range: "5 ft.",
								targets: "one creature"
							},
							hit: {
								damage: ["(1d1)", "1"],
								type: "piercing"
							}
						}
					],
					description: "A small flying animal, nocturnal but not usually blind, very good at hunting small prey like insects."
				}, // bat
				{
					name: "Bear, Black",
					subtitle: "medium beast (bear), unaligned",
					properties: {
						ac: [11, "(Natural Armor)"],
						hp: ["19 (3d8 + 6)", "((3d8)+6)"],
						speed: "40 ft., climb 30 ft.",
						perception: 13
					},
					attributes: {
						str: [15, 2],
						dex: [10, 0],
						con: [14, 2],
						int: [2, -4],
						wis: [12, 1],
						cha: [7, -2]
					},
					feats: [
						{
							name: "Keen Smell",
							description: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
						}
					],
					actions: [
						{
							name: "Multiattack",
							description: "The bear makes two attacks: one with its bit and one with its claws."
						},
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 3,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 2)", "((1d6)+2)"],
								type: "piercing"
							}
						},
						{
							name: "Claws",
							attack: {
								type: "Melee",
								bonus: 3,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(2d4 + 2)", "((2d4)+2)"],
								type: "slashing"
							}
						}
					],
					description: "The black bear is the most docile of the bear family, but will still happily tear you to pieces if provoked."
				}, // bear, black
				{
					name: "Bear, Brown",
					subtitle: "large beast (bear), unaligned",
					properties: {
						ac: [11, "(Natural Armor)"],
						hp: ["34 (4d10 + 12)", "((4d10)+12)"],
						speed: "40 ft., climb 30 ft.",
						perception: 13
					},
					attributes: {
						str: [19, 4],
						dex: [10, 0],
						con: [16, 3],
						int: [2, -4],
						wis: [13, 1],
						cha: [7, -2]
					},
					feats: [
						{
							name: "Keen Smell",
							description: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
						}
					],
					actions: [
						{
							name: "Multiattack",
							description: "The bear makes two attacks: one with its bit and one with its claws."
						},
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 5,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d8 + 4)", "((1d8)+4)"],
								type: "piercing"
							}
						},
						{
							name: "Claws",
							attack: {
								type: "Melee",
								bonus: 5,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(2d4 + 4)", "((2d4)+4)"],
								type: "slashing"
							}
						}
					],
					description: "This bear is very large and will rip you to pieces with ease. It enjoys sweet tastes and meat, and will destroy your camp looking for any."
				}, // bear, brown
				{
					name: "Boar",
					subtitle: "medium beast, unaligned",
					properties: {
						ac: [11, "(Natural Armor)"],
						hp: ["11 (2d8 + 2)", "((2d8)+2)"],
						speed: "40 ft.",
						perception: 9
					},
					attributes: {
						str: [13, 1],
						dex: [11, 0],
						con: [12, 1],
						int: [2, -4],
						wis: [9, -1],
						cha: [5, -3]
					},
					feats: [
						{
							name: "Charge",
							description: "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
						},
						{
							name: "Relentless (Recharges after a Short or Long Rest)",
							description: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
						}
					],
					actions: [
						{
							name: "Tusk",
							attack: {
								type: "Melee",
								bonus: 3,
								range: "5 ft.",
								target: "one target"
							},
							hit: {
								damage: ["(1d6 + 1)", "((1d6)+1)"]
							}
						}
					],
					description: "A form of wild pig, this boar has so much hatred that it will keep attacking you until it dies."
				}, // boar
				{
					name: "Kraken",
					subtitle: "gargantuan monstrosity (titan), chaotic evil",
					properties: {
						ac: [18, "(Natural Armor)"],
						hp: ["472 (27d20 + 189)", "((27d20)+189)"],
						speed: "20ft., swim 60ft.",
						saves: "Str +17, Dex +7, Con +14, Int +13, Wis +11",
						damage_immune: "Lightning; Bludgeoning, Piercing, and Slashing From Nonmagical Attacks",
						condition_immune: "Frightened, Paralyzed",
						perception: 14,
						senses: "Truesight 120 ft.",
						languages: "Understands Abyssal, Celestial, Infernal, And Primordial But Can't Speak, Telepathy 120 ft."
					},
					attributes: {
						str: [30, 10],
						dex: [11, 0],
						con: [25, 7],
						int: [22, 6],
						wis: [18, 4],
						cha: [20, 5]
					},
					feats: [
						{
							name: "Amphibious",
							description: "The kraken can breathe air and water."
						},
						{
							name: "Freedom of Movement",
							description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled."
						},
						{
							name: "Siege Monster",
							description: "The kraken deals double damage to objects and structures."
						}
					],
					actions: [
						{
							name: "Multiattack",
							description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
						},
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 17,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(3d8 + 10)", "((3d8)+10)"],
								type: "piercing"
							},
							description: "If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
						},
						{
							name: "Tentacle",
							attack: {
								type: "Melee",
								bonus: 17,
								range: "30 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(3d6 + 10)", "((3d6)+10)"],
								type: "bludgeoning"
							},
							description: "The target is grappled (escape dc 18) Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target."
						},
						{
							name: "Fling",
							description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
						},
						{
							name: "Lightning Storm",
							description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
						}
					],
					legendary: {
						number: 3,
						e: [
							{
								name: "Tentacle Attack or Fling (Cost: 1)",
								description: "The kraken makes one tentacle attack or uses its Fling."
							},
							{
								name: "Lightning Storm (Cost: 2)",
								description: "The kraken uses Lightning Storm."
							},
							{
								name: "Ink Cloud (Cost: 3)",
								description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
							}
						]
					},
					description: "A titanic underwater tentacled beast that torments sailors."
				}, // kraken
				{
					name: "Wolf, Dire",
					subtitle: "large beast (canine), unaligned",
					properties: {
						ac: [14, "(Natural Armor)"],
						hp: ["37 (5d10 + 10)", "((5d10)+10)"],
						speed: "50 ft.",
						skills: "Perception +3, Stealth +4",
						perception: 13
					},
					attributes: {
						str: [17, 3],
						dex: [15, 2],
						con: [15, 2],
						int: [3, -4],
						wis: [12, 1],
						cha: [7, -2]
					},
					feats: [
						{
							name: "Keen Hearing and Smell",
							description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
						},
						{
							name: "Pack Tactics",
							description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
						}
					],
					actions: [
						{
							name: "Bite",
							attack: {
								type: "Melee",
								bonus: 5,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(2d6 + 3)", "((2d6)+3)"],
								type: "piercing"
							},
							description: "If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone"
						}
					],
					description: "An exceedingly large wolf, often trained and used for hunting."
				}, // wolf, dire
			]
		},
		{
			name: "Construct",
			e: [
				{
					name: "Animated Armor",
					subtitle: "medium construct, unaligned",
					properties: {
						ac: [18, "(Natural Armor (Plated))"],
						hp: ["33 (6d8 + 6)", "((6d8)+6)"],
						speed: "25 ft.",
						damage_immune: "Poison, Psychic",
						condition_immune: "Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
						sense: "Blindsight 60 Ft. (Blind Beyond This Radius)",
						perception: 6
					},
					attributes: {
						str: [14, 2],
						dex: [11, 0],
						con: [13, 1],
						int: [1, -5],
						wis: [3, -4],
						cha: [1, -5]
					},
					feats: [
						{
							name: "Antimagic Susceptability",
							description: "The armour is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armour must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
						},
						{
							name: "False Appearance",
							description: "While the armour remains motionless, it is indistinguishable from a normal suit of armour."
						}
					],
					actions: [
						{
							name: "Multiattack",
							description: "The armour makes two melee attacks."
						},
						{
							name: "Slam",
							attack: {
								type: "Melee",
								bonus: 4,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 2)", "((1d6)+2)"],
								type: "bludgeoning"
							}
						}
					],
					description: "A magical suit of armour brought to life by sorcery."
				}, // animated armour
			]
		},
		{
			name: "Humanoid",
			e: [
				{
					name: "Assassin",
					subtitle: "medium humanoid (any race), any non-good alignment",
					properties: {
						ac: [15, "(Studded Leather)"],
						hp: ["78 (12d8 + 24)", "((12d8)+4)"],
						speed: "30 ft.",
						saves: "Dex +6, Int +4",
						skills: "Acrobatics +6, Deception +3, Perception +3, Stealth +9",
						damage_resist: "Poison",
						perception: 13,
						languages: "Thieves' Cant Plus Any Two Languages"
					},
					attributes: {
						str: [11, 0],
						dex: [16, 3],
						con: [14, 2],
						int: [13, 1],
						wis: [11, 0],
						cha: [10, 0]
					},
					feats: [
						{
							name: "Assassinate",
							description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
						},
						{
							name: "Evasion",
							description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
						},
						{
							name: "Sneak Attack (1/Turn)",
							description: "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."
						}
					],
					actions: [
						{
							name: "Multiattack",
							description: "The assassin makes two shortsword attacks."
						},
						{
							name: "Shortsword",
							attack: {
								type: "Melee",
								bonus: 6, 
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 3) piercing + (7d6) poison", "((1d6)+3+(7d6))"],
								type: ""
							},
							description: "The target must make a DC 15 Constitution saving throw, taking the poison damage on a failed save, or half as much damage on a successful one."
						},
						{
							name: "Light Crossbow",
							attack: {
								type: "Ranged",
								bonus: 6,
								range: "80/320 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d8 + 3) piercing + (7d6) poison", "((1d8)+3+(7d6))"],
								type: ""
							},
							description: "The target must make a DC 15 Constitution saving throw, taking the poison damage on a failed save, or half as much damage on a successful one."
						}
					],
					description: "A hunter that has turned to hunting people for money. Very fond of poisons."
				}, // assassin
				{
					name: "Bandit",
					subtitle: "medium humanoid (any race), any non-lawful alignment",
					properties: {
						ac: [12, "(Leather Armor)"],
						hp: ["11 (2d8 + 2)", "((2d8)+2)"],
						speed: "30 ft.",
						perception: 10,
						languages: "Common"
					},
					attributes: {
						str: [11, 0],
						dex: [12, 1],
						con: [12, 1],
						int: [10, 0],
						wis: [10, 0],
						cha: [10, 0]
					},
					feats: [],
					actions: [
						{
							name: "Scimitar",
							attack: {
								type: "Melee",
								bonus: 3,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 1)", "((1d6)+1)"],
								type: "slashing"
							}
						},
						{
							name: "Light Crossbow",
							attack: {
								type: "Ranged",
								bonus: 3,
								range: "80/320 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d8 + 1)", "((1d8)+1)"],
								type: "piercing"
							}
						}
					],
					description: "A person that has resorted to crime either out of necessity or simply for fun."
				}, // bandit
				{
					name: "Bandit, Captain",
					subtitle: "medium humanoid (any race), any non-lawful alignment",
					properties: {
						ac: [15, "(Studded Leather)"],
						hp: ["65 (10d8 + 20)", "((10d8)+20)"],
						speed: "30 ft.",
						saves: "Str +4, Dex +5, Wis +2",
						skills: "Athletics +4, Deception +4",
						perception: 10,
						languages: "Common, any other language"
					},
					attributes: {
						str: [15, 2],
						dex: [16, 3],
						con: [14, 2],
						int: [14, 2],
						wis: [11, 0],
						cha: [14, 2]
					},
					feats: [],
					actions: [
						{
							name: "Multiattack",
							description: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
						},
						{
							name: "Scimitar",
							attack: {
								type: "Melee",
								bonus: 5,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 3)", "((1d6)+3)"],
								type: "slashing"
							}
						},
						{
							name: "Dagger",
							attack: {
								type: "Melee",
								bonus: 5,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d4 + 3)", "((1d4)+3)"],
								type: "piercing"
							}
						},
						{
							name: "Dagger (Thrown)",
							attack: {
								type: "Ranged",
								bonus: 5,
								range: "20/60 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d4 + 3)", "((1d4)+3)"],
								type: "piercing"
							}
						}
					],
					reactions: [
						{
							name: "Parry",
							description: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
						}
					],
					description: "A person that has resorted to crime either out of necessity or simply for fun."
				}, // bandit, captain
				{
					name: "Berserker",
					subtitle: "medium humanoid (any race), any chaotic alignment",
					properties: {
						ac: [13, "(Hide Armor)"],
						hp: ["67 (9d8 + 27)", "((9d8)+27)"],
						speed: "30 ft.",
						percetion: 10,
						langauges: "Any one language (usually Common)"
					},
					attributes: {
						str: [16, 3],
						dex: [12, 1],
						con: [17, 3],
						int: [9, -1],
						wis: [11, 0],
						cha: [9, -1]
					},
					feats: [
						{
							name: "Reckless",
							description: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
						}
					],
					actions: [
						{
							name: "Greataxe",
							attack: {
								type: "Melee",
								bonus: 5,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d12 + 3)", "((1d12)+3)"],
								type: "slashing"
							}
						}
					],
					description: "A form of warrior that takes a lot of hallucinagens before battle, allowing him to numb the pain and to hit harder."
				}, // berserker
				{
					name: "Commoner",
					subtitle: "medium humanoid (any race), any alignment",
					properties: {
						ac: [10, ""],
						hp: ["4 (1d8)", "(1d8)"],
						speed: "30 ft.",
						perception: 10,
						languages: "Any one language (usually Common)"
					},
					attributes: {
						str: [10, 0],
						dex: [10, 0],
						con: [10, 0],
						int: [10, 0],
						wis: [10, 0],
						cha: [10, 0]
					},
					feats: [],
					actions: [
						{
							name: "Club",
							attack: {
								type: "Melee",
								bonus: 2,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d4)", "(1d4)"],
								type: "bludgeoning"
							}
						}
					],
					description: "Just a regular person."
				}, // commoner
				{
					name: "Goblin",
					subtitle: "small humanoid (goblinoid) , neutral evil",
					properties: {
						ac: [15, "(Leather Armor, Shield)"],
						hp: ["7 (2d6)", "(2d6)"],
						speed: "30ft.",
						perception: 9,
						skills: "Stealth +6",
						senses: "Darkvision 60ft.",
						languages: "Common, Goblin"
					},
					attributes: {
						str: [8, -1],
						dex: [14, 2],
						con: [10, 0],
						int: [10, 0],
						wis: [8, -1],
						cha: [8, -1]
					},
					feats: [
						{
							name: "Nimble Escape",
							description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
						}
					],
					actions: [
						{
							name: "Scimitar",
							attack: {
								type: "Melee",
								bonus: 4,
								range: "5 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 2)", "((1d6)+2)"],
								type: "slashing"
							}
						},
						{
							name: "Shortbow",
							attack: {
								type: "Ranged",
								bonus: 4,
								range: "80/320 ft.",
								targets: "one target"
							},
							hit: {
								damage: ["(1d6 + 2)", "((1d6)+2)"],
								type: "piercing"
							}
						}
					],
					description: "A small race of humanoid monsters, around 3-4 ft tall. Individually weak, they gather in large numbers."
				}, // goblin
			]
		}
	]
};