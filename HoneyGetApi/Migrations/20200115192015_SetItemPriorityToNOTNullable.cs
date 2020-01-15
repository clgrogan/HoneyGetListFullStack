using Microsoft.EntityFrameworkCore.Migrations;

namespace HoneyGetApi.Migrations
{
    public partial class SetItemPriorityToNOTNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Priority",
                table: "Items",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Priority",
                table: "Items",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}
