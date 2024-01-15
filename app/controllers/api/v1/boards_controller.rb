class Api::V1::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @boards = Board.all.order(created_at: :desc)
    render json: @boards
  end

  def create
    board = Board.new
    board = board.create_board(board_params)

    if board
      render json: board
    else
      render json: board.errors
    end
  end

  def show
    render json: @recipe
  end

  private 

  def board_params
    params.permit(:name, :email, :height, :width, :num_mines)
  end
end
