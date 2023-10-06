<?php

use PHPUnit\Framework\TestCase;

class TestCOR extends TestCase
{
	function test(): void
	{

		$expert = \App\Processing\COR\InitializeCOR::beloteChallenge();

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
}
