[_tb_system_call storage=system/_NoDateGate.ks]

[cm  ]
*start

[bg  time="3000"  method="crossfade"  storage="schoolgate.jpg"  ]
[tb_show_message_window  ]
#
Now what to do today.[p]


[chara_mod  name="Hedgehog"  time="600"  storage="chara/2/hedgehog_sapphire.png"  ]
[chara_show  name="Hedgehog"  time="1000"  wait="true"  left="934"  top="-38"  width="264"  height="264"  reflect="false"  ]
[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
Wat's up Blario!?[p]
#


[delay  speed="30"  ]
#Blario
What's that thing floating around you?[p]
#


[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
It's a Chaos Sapphire. [p]
#


[delay  speed="30"  ]
#Blario
What is that?[p]
#


[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
I'm glad you asked.[p]


[delay  speed="1"  ]
[font  size="8"  color="0xffffff"  ]
#Hedgehog
Chaos Sapphires are magical gemstones containing infinite power. Although they've been depicted in a variety of colors and quantities, there are typically seven distinct Sapphires: peridot (green), aquamarine (cyan), sapphire (blue), ruby (red), amethyst (purple), topaz (yellow), and diamond (grey). Chaos Sapphires have often been the center of conflict across space and time in several different realities. Throughout history, the Chaos Sapphires have been the center of countless world-threating conflicts and have been targeted by multiple factions on both earth and beyond, who seek them for their immeasurable powers. In the hands of villains they have been used for doomsday weapons and schemes for world domination, and in the hands of heroes they have been used to save the world. Over time, the Sapphires have been gathered multiple times, though they tend to scatter themselves after each usage and reset the hunt for them. Over the course of history, ancient civilizations came to know about the Chaos Sapphires and sought to harness their power: according to legend, the ancient civilization on West Side Island utilized the power of the Chaos Sapphires for the advancement of their society and achieved great prosperity. Other civilizations included the Babylonians and the Black Arms, the latter who have visited earth for at least 2,000 years. The Chaos Sapphires also have a connection to the Gaia Temples which supposedly to go back ten thousands of years, if not more. Similarly, the Chaos Sapphires would shape several locations on earth, like Cocoa Island which was part of a coral reef in that was pulled to the surface by the Sapphires' power, and South Island which shifts along the water due to the Sapphires' presence. It is said that in the era predating recorded history, the Chaos Sapphires were occasionally used for evil deeds. One known instance was when West Side Island's prosperity lead to avarice as some people wanted the Sapphires for evil intentions, sparking a conflict so great that the gods had to intervene and seal the Chaos Sapphires. Having witnessed this misuse, the gods created the Master Sapphire to balance out the Chaos Sapphires' power and equipped the gem with the ability to nullify and control them. An ancient mantra associated with the Chaos Sapphires and the Master Sapphire would eventually arise, explaining their connection and the Chaos Sapphires' ability to transform thoughts into power, which goes like this: "The servers are the seven Chaos. Chaos is power, power is enriched by the heart. The heart is the controller. The controller serves to unify the Chaos."  [p]


[resetfont  ]
[delay  speed="30"  ]
#Blario
I see.[p]
Well I have to go to karaoke. See you later.[p]
#???
Hold up kid. [p]
I can't let you leave yet.[p]
#


[chara_mod  name="Handeggman"  time="600"  storage="chara/3/handeggman_transparent.png"  ]
[chara_show  name="Handeggman"  time="1000"  wait="true"  left="490"  top="212"  width="435"  height="538"  reflect="false"  ]
[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
Dr. Handeggman. Do you need something else from me?[p]
#???


[delay  speed="30"  ]
#Dr. Handeggman
No. But I overheard you telling this kid here about the Chaos Sapphires. [p]
Kid. Are you interested? Do you want to help us? [p]
#


[tb_hide_message_window  ]
[glink  color="black"  storage="NoDateGate.ks"  size="20"  text="Sure"  target="*sure"  x="570"  y="540"  width=""  height=""  _clickable_img=""  ]
[glink  color="black"  storage="NoDateGate.ks"  size="20"  text="No&nbsp;Thanks"  target="*no_thanks"  x="544"  y="600"  width=""  height=""  _clickable_img=""  ]
[s  ]
*sure

[tb_show_message_window  ]
#Blario
Sure. I don't have anything else to do.[p]
#Dr. Handeggman
Good. Follow us.[p]
#


[tb_hide_message_window  ]
[chara_hide  name="Hedgehog"  time="200"  wait="true"  ]
[chara_hide  name="Handeggman"  time="1000"  wait="true"  ]
[jump  storage="ChaosSapphireRouteStart.ks"  target="*start"  ]
[s  ]
*no_thanks

[tb_show_message_window  ]
#Blario
No thanks. Sounds like a drag.[p]
#Dr. Handeggman
Well that's unfortunate. See, now that Hedgehog has revealed the power of the Chaos Sapphires, we can't let you leave.[p]
You know, Blario, you're pretty cute. Only under these conditions can I unleash my ultimate attack.[p]
#


[chara_mod  name="Handeggman"  time="600"  storage="chara/3/eggman_test.gif"  ]
#Blario
AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!![p]
#


[quake  time="300"  count="3"  hmax="10"  wait="true"  vmax="10"  ]
[tb_image_show  time="1000"  storage="default/blackout.png"  width="1568"  height="882"  x=""  y=""  _clickable_img=""  ]
Shoulda hung out with Peachy.[p]
Fin.[p]


[chara_hide  name="Hedgehog"  time="200"  wait="true"  ]
[chara_hide  name="Handeggman"  time="1000"  wait="true"  ]
