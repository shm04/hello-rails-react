class Api::MessagesController < ApplicationController
    def index
      @message = Message.order('RANDOM()').first
      render plain: @message.message
    end
  end