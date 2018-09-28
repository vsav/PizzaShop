class AddProducts < ActiveRecord::Migration[5.2]
  def change
    Product.create :title => 'Hawaiian',
                   :description => 'This is Hawaiian pizza',
                   :price => 700,
                   :size => 36,
                   :is_spicy => false,
                   :is_veg => false,
                   :is_best_offer => false,
                   :img_path => '/images/hawaii.png'

    Product.create :title => 'Pepperoni',
                   :description => 'Nice Pepperoni pizza',
                   :price => 600,
                   :size => 36,
                   :is_spicy => true,
                   :is_veg => false,
                   :is_best_offer => false,
                   :img_path => '/images/pepperoni.png'

    Product.create :title => 'Vegetarian',
                   :description => 'Amazing Vegetarian pizza',
                   :price => 450,
                   :size => 36,
                   :is_spicy => false,
                   :is_veg => true,
                   :is_best_offer => false,
                   :img_path => '/images/vegan.png'

    Product.create :title => 'Hawaiian2',
                   :description => 'This is Hawaiian2 pizza',
                   :price => 500,
                   :size => 30,
                   :is_spicy => false,
                   :is_veg => false,
                   :is_best_offer => false,
                   :img_path => '/images/hawaii.png'

    Product.create :title => 'Pepperoni2',
                   :description => 'Nice Pepperoni2 pizza',
                   :price => 400,
                   :size => 30,
                   :is_spicy => true,
                   :is_veg => false,
                   :is_best_offer => false,
                   :img_path => '/images/pepperoni.png'

    Product.create :title => 'Vegetarian2',
                   :description => 'Amazing Vegetarian2 pizza',
                   :price => 350,
                   :size => 30,
                   :is_spicy => false,
                   :is_veg => true,
                   :is_best_offer => false,
                   :img_path => '/images/vegan.png'
  end
end
