class Api::V1::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token :raise => false
  skip_before_action :authenticate_user!, :only => "reply", :raise => false

  before_action :set_board, only: %i[show]

  def most_recent
    @boards = Board.order(created_at: :desc).first(10)
    render json: @boards
  end

  def all
    @boards = Board.all.order(created_at: :desc).page(params[:page])
    render json: {
      boards: @boards,
      total_pages: @boards.total_pages,
    }
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
    render json: @board
  end

  private 

  def board_params
    params.permit(:name, :email, :height, :width, :numberOfMines)
  end

  def set_board
    @board = Board.find(params[:id])
  end
end