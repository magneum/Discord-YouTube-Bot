FROM kalilinux/kali-rolling
  
RUN apt update && apt upgrade -y && apt install git -y 

RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh

RUN apt install nodejs
  
RUN git clone https://github.com/HypeVoidSoul/Discord_YouTube_Bot.git
  
RUN cd Discord_YouTube_Bot

RUN npm install

WORKDIR /Discord_YouTube_Bot
   
CMD  node YouTube_I.js