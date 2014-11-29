#!/usr/bin/python

from CharLCD import CharLCD
import sys

message = '';
if len(sys.argv) == 2:
        message = sys.argv[1];

lcd = CharLCD(14, 15, [18, 24, 25, 8])

lcd.begin(16, 2)

print('Printing ' + message)
lcd.message(message)

lcd.cleanUp()
