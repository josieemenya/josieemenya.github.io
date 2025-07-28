pico-8 cartridge // http://www.pico-8.com
version 41
__lua__
highscore= 0

function movepaddle()
end

function _init()
	player={} --tables, basically classes in lua
	player.x = 1
	player.y = 64
	player.width = 2
	player.height = 16
	
	
	ball={}
	ball.x = 64
	ball.y = 64
	ball.size = 2
	ball.dx = 1
	ball.dy = 1
	
	opp = {}
	opp.x = 124
	opp.y = 64
	opp.width = 2
	opp.height = 16
	
	hit = 0
	
	dead = false
	--gamecol = 0
	
 
	newscore = 0
	hitscore = 0
	dscore = 0
 	
 col_dx = 1
	

--	colorspe = gamecol
end

function _update()
--if (!dead) then
col_dx = col_dx + 1
updatescore()
ballspeed()
ballbounce()
movepaddle()
oppmove()
oppbounce()
pbounce()


--gamecol += gamecol + 1
	
end

function _draw()
cls()
rectfill(player.x, player.y,
player.x + player.width,
player.y + player.height,
7)


circfill(ball.x, ball.y, 
ball.size)

rectfill(opp.x, opp.y,
opp.x + opp.width,
opp.y + opp. height,
7)

score()

if ball.x < 0 or ball.x > 145 then 
cls()
gameover()
dead = true
		end
		
if (dead) 
	and btn(4) 
		then
		cls()
	dead = false
	_init()
end

		
end
-->8
--player/paddle functionality
function movepaddle()
	if btn(⬇️) then 
			player.y+=2
		end
	if btn(⬆️) then
		player.y-=2
		end
end

function pbounce()
if (ball.y >= player.y) and
			(ball.y <= player.y + player.height) and
			(ball.x == player.x + player.width) then 
			
			ball.dx=-ball.dx
			
			hit = hit + 1
		end	
end

-->8
-- ball functionality

function ballspeed()

ball.x+=ball.dx
ball.y+=ball.dy
--	if ball.x 
end

function ballbounce()
if (ball.y >128) or 
(ball.y < 0) then
ball.dy =- ball.dy
end
end
-->8
function gameover()

print ('highscore : ', 35, 54 , 1)
print (highscore , 88, 54 , 1)
print ('game over \n', 48, 64, 1) 
print ('press c to continue', 27, 72, 1) 


end

-->8
--opp movements
function oppmove()
opp.y = ball.y
end

function oppbounce()
if (ball.y >= opp.y) and
			(ball.y <= opp.y + opp.height) and
			(ball.x == opp.x + opp.width) then 
			
		
			ball.dx=-ball.dx
			
end

end
-->8
--score mech

function score ()



print ('score :',45 , 6, 6)
print (hit ,80 , 6, 6)



end
-->8
-- update score
function updatescore()
local hit = hit
	
if hit > highscore then
print ('new highscore!', 35, 54 , col_dx)
highscore =  hit
end
	
end
__gfx__
00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00700700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00077000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00077000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00700700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
