<?php

use PHPUnit\Framework\TestCase;

class TestCOR extends TestCase
{
	function test_mismatched_card(): void
	{

		$expert = \App\Processing\COR\InitializeCOR::Jeu();

		$card1 = new \App\Models\Card();
		$card1->type = "spades";
		$card1->color = "red";
		$card1->value= "queen";
		$card1->points = 3;

		$card2 = new \App\Models\Card();
		$card2->type = "diamonds";
		$card2->color = "black";
		$card2->value= "ace";
		$card2->points = 3;

		$score = $expert->compare($card1,$card2);
		$expected = 6;
		$this->assertEquals($score,$expected);
	}
	function test_mismatched_color(): void
	{

		$expert = \App\Processing\COR\InitializeCOR::Jeu();

		$card1 = new \App\Models\Card();
		$card1->type = "spades";
		$card1->color = "red";
		$card1->value= "queen";
		$card1->points = 3;

		$card2 = new \App\Models\Card();
		$card2->type = "spades";
		$card2->color = "black";
		$card2->value= "queen";
		$card2->points = 3;

		$score = $expert->compare($card1,$card2);
		$expected = -6;
		$this->assertEquals($score,$expected);
	}
	function test_matched_card(): void
	{

		$expert = \App\Processing\COR\InitializeCOR::Jeu();

		$card1 = new \App\Models\Card();
		$card1->type = "spades";
		$card1->color = "black";
		$card1->value= "queen";
		$card1->points = 3;

		$card2 = new \App\Models\Card();
		$card2->type = "spades";
		$card2->color = "black";
		$card2->value= "queen";
		$card2->points = 3;

		$score = $expert->compare($card1,$card2);
		$expected = -12;
		$this->assertEquals($score,$expected);
	}
}
