# spec/models/board_spec.rb
require 'rails_helper'

describe Board, type: :model do
  describe '.create_board' do
    let(:params) do
      {
        name: 'Test Board',
        email: 'test@example.com',
        height: 5,
        width: 5,
        numberOfMines: 5
      }
    end

    it 'creates a new board with valid parameters' do
      expect { Board.new.create_board(params) }.to change(Board, :count).by(1)
    end

    it 'raises an error if name is missing' do
      params[:name] = nil
      expect { Board.new.create_board(params) }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'raises an error if email is missing' do
      params[:email] = nil
      expect { Board.new.create_board(params) }.to raise_error(ActiveRecord::RecordInvalid)
    end

    context 'private methods' do
      describe '.generate_grid' do
        it 'generates a grid with the correct number of mines' do
          board = Board.new
          grid = board.send(:generate_grid, 5, 5, 3)
          expect(grid.flatten.count(1)).to eq(3)
        end

        it 'generates a grid with the maximum number of mines' do
            board = Board.new
            grid = board.send(:generate_grid, 30, 30, 900)
            expect(grid.flatten.count(1)).to eq(900)
        end
      end

      describe '.get_random_coordinate' do
        it 'returns a valid random coordinate within the specified bounds' do
          board = Board.new
          height = 5
          width = 5
          random_coordinate = board.send(:get_random_coordinate, height, width)
          expect(random_coordinate[0]).to be >= 0
          expect(random_coordinate[0]).to be < height
          expect(random_coordinate[1]).to be >= 0
          expect(random_coordinate[1]).to be < width
        end
      end
    end
  end
end
