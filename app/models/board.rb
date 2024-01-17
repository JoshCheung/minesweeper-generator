class Board < ApplicationRecord
    paginates_per 12
    
    validates :name, presence: true
    validates :email, presence: true

    def create_board(params)
        board_name = params[:name]
        email = params[:email]
        height = params[:height].to_i
        width = params[:width].to_i
        num_mines = params[:numberOfMines].to_i
        grid = generate_grid(height, width, num_mines)

        board = Board.create!(name: board_name, email: email, grid: grid)
    end

    private

    def generate_grid(height, width, num_mines) 
        grid = Array.new(height) { Array.new(width, 0) } #initialize 2-dimensional array
        coordinate_set = Set.new # to ensure no mine is placed on a cell that already has one
    
        while num_mines > 0
            random_coordinate = get_random_coordinate(height, width)
            while coordinate_set.include?(random_coordinate)
                random_coordinate = get_random_coordinate(height, width)
            end
            grid[random_coordinate[0]][random_coordinate[1]] = 1
            coordinate_set << random_coordinate
            num_mines -= 1
        end
        grid
    end

    def get_random_coordinate(height, width)
        random_y_coordinate = Random.new.rand(height)
        random_x_coordinate = Random.new.rand(width)
        random_coor = [random_y_coordinate, random_x_coordinate]
    end 
end