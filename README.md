# My [Home Assistant](https://home-assistant.io/) Configuration Files

## Summary
I should note that I have a SmartThings Hub and Lutron Caseta hub because my house didn't have the neutral wiring required for most Z-Wave light switches.

One good thing about having a SmartThings hub vs using a USB Z-Wave adapter on a Raspberry Pi is the option to control devices through an Amazon Echo or Google Home.

Another reason to use a hub is the ease of connecting devices to SmartThings.

I bought a Lutron hub and connected my Lutron Caseta light switches to it. I then installed the SmartThings [Lutron Pi SmartApp](https://community.smartthings.com/t/beta-lutron-caseta-integration-using-raspberry-pi-pro-or-standard-bridge/62748) to list the Lutron lights in SmartThings.

To get SmartThings devices to work with Home Assistant, I installed the [SmartThings MQTT Bridge](https://github.com/stjohnjohnson/smartthings-mqtt-bridge) which links my SmartThings hub to Mosquitto MQTT server running on the Raspberry Pi.

So what you are going to see in my files is a configuration that deals mostly with MQTT devices.

## Devices

- Raspberry Pi running [Home Assistant](https://home-assistant.io/), Mosquitto (MQTT), [SmartThings MQTT Bridge](https://github.com/stjohnjohnson/smartthings-mqtt-bridge), [PlexPy](https://github.com/JonnyWong16/plexpy), [SmartThings Lutron Caseta Integration](https://community.smartthings.com/t/beta-lutron-caseta-integration-using-raspberry-pi-pro-or-standard-bridge/62748), [Pi-Hole](https://pi-hole.net/)
- SmartThings Hub
- Lutron Caseta Hub
- Lutron Caseta In-Wall Dimmers
- [Plex Media Server](https://www.plex.tv/)
- Raspberry Pi with [OpenPHT](https://github.com/RasPlex/OpenPHT/releases)
- [Amcrest 1080P POE Cameras](https://www.amazon.com/s/ref=nb_sb_noss/185-6939966-2857643?url=search-alias%3Daps&field-keywords=amcrest+poe+1080p&x=0&y=0)
- Asus RT-AC68R Router which uses [ASUSWRT](https://home-assistant.io/components/device_tracker.asuswrt/)
- Chromecast
- Z-Wave Open/Close Sensors
- Z-Wave Smoke/Carbon Monoxide Detectors (First Alert)
- Z-Wave Motion Sensors
- Z-Wave Thermostat (2Gig CT100)

![Home](https://raw.githubusercontent.com/scottocs11/Home-Assistant-Config/master/HASS%20Images/1Home.png)

![Home](https://raw.githubusercontent.com/scottocs11/Home-Assistant-Config/master/HASS%20Images/2Cameras.png)

![Home](https://raw.githubusercontent.com/scottocs11/Home-Assistant-Config/master/HASS%20Images/3Thermostat.png)

![Home](https://raw.githubusercontent.com/scottocs11/Home-Assistant-Config/master/HASS%20Images/4SmokeDetectors.png)

![Home](https://raw.githubusercontent.com/scottocs11/Home-Assistant-Config/master/HASS%20Images/5Automation.png)

![Home](https://raw.githubusercontent.com/scottocs11/Home-Assistant-Config/master/HASS%20Images/6System.png)